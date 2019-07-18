> ❗**Important** This package is under active development. Its not production ready and API can change at any time.

# MSTB

![CircleCI](https://img.shields.io/circleci/build/github/kresli/mstb.svg?style=flat-square)
![Codecov](https://img.shields.io/codecov/c/github/kresli/mstb.svg?style=flat-square)
![GitHub file size in bytes](https://img.shields.io/github/size/kresli/mstb/dist/mstb.esm.js.svg?style=flat-square)

- [Simple bundle example](#Simple-bundle-example)
- [Multi level example](#Multi-bundle-example)
- [API](#api) TODO
- [Best Practices](#best-practices) TODO
- [Q&A](#q&a)
  - [HOW IT WORKS](#HOW-IT-WORKS)
  - [CAN I USE IT IN EXISTING PROJECT?](#CAN-I-USE-IT-IN-EXISTING-PROJECT?)
  - [HOW TO CONVERT EXISTING MST model TO MSTB](#HOW-TO-CONVERT-EXISTING-MST-model-TO-MSTB)
  - [HOW TO ACCESS MODEL FROM CONTROLLER](#HOW-TO-ACCESS-MODEL-FROM-CONTROLLER)
  - [HOW TO ACCESS CTONROLLER FROM MODEL](#HOW-TO-ACCESS-CTONROLLER-FROM-MODEL)
  - [HOW TO CREATE BUNDLE](#HOW-TO-CREATE-BUNDLE)
  - [IS BUNDLE REQUIRED?](#IS-BUNDLE-REQUIRED?)
  - [HOW TO EXTEND CONTROLLER](#HOW-TO-EXTEND-CONTROLLER)
  - [HOW TO EXTEND MODEL](#HOW-TO-EXTEND-MODEL)
  - [DOES BUNDLE NEED TO BE A CLASS](#DOES-BUNDLE-NEED-TO-BE-A-CLASS)

## Simple bundle example

```ts
const props = {
  name: types.string,
  age: types.age
};
class ChildCtrl extends Controller(props) {
  restrictAge = 18;
  @computedAlive get messages() {
    return {
      restrict: `Access Denied: ${this.name} is under ${this.restrictAge}.`,
      allow: `Access Granted: Welcome ${this.name}.`
    };
  }
  @computedAlive get name() {
    return this.$model.name;
  }
  @computedAlive get isUnderAge() {
    return this.$model.age < this.restrictAge;
  }
  @computedAlive get accessMessage() {
    const { restrict, allow } = this.messages;
    return this.isUnderAge ? restrict : allow;
  }
  @action setAge(age: number) {
    this.$model.age = age;
  }
}
class Child extends Bundle(ChildCtrl) {}

const child = Child.Store.create({ name: "Peter", age: 17 }).$controller;

child.accessMessage; // `Access Denied: Peter is 18.`
child.setAge(18);
child.accessmessage; // `Access Granted: Welcome Peter.`
```

## Multi bundle example

```ts
// child.ts
import { computedAlive, action, Controller, Bundle } from "mstb";
class ChildController extends Controller({
  name: types.string
}) {
  @computedAlive get name() {
    return this.$model.name;
  }
  @action setName(name: string) {
    this.$model.name = name;
  }
}
export class Child extends Bundle(ChildController) {}
```

```ts
// parent.ts
import { computedAlive, Controller, Bundle, action } from "mstb";
import { Child } from "./child";

class ParentController extends Controller({
  name: types.string,
  age: types.number
}) {
  @computedAlive get son() {
    return this.$resolveIdentifier(Child, "son");
  }
}
export class Parent extends Bundle(ParentController) {}
```

```ts
// family.ts
import { computedAlive, Controller, Bundle } from "mstb";
import { Child } from "./child";
import { Parent } from "./parent";

class FamilyController extends Controller({
  parent: Parent.Store,
  kids: types.array(Child.Store)
}) {
  @computedAlive get parent() {
    return this.$model.parent.$controller;
  }
  @computedAlive get kids() {
    return this.$model.kids.map(k => k.$controller);
  }
}
export class Family extends Bundle(FamilyController) {}
```

```ts
// app.store.ts

// or experimental Family.create({...}) to get $controller stright away
// but its not recomended for TypeScript
const family = Family.Store.create({
  parent: {
    name: "Jhon",
    age: 36
  },
  kids: [
    {
      uuid: "child-peter",
      name: "Peter"
    },
    {
      name: "Anna"
    }
  ]
}).$controller;

// now we can access $controller directly
console.log(family.parent.childPeter.name); // "Peter"
```

## Q&A

> **NOTE**: in following I asume you are familiar with `mobx` and `mobx-state-tree`

> **NOTE 2**: in following answers I asume you are using `Controller`, `Bundle` and
> `@computedAlive` from `mstb` package.

---

### HOW IT WORKS

MSTB is build on very simple idea.

- inject bundle's controller instance into `$model` volatile `$controller` property
- inject MST `$model` in `$controller`
- inject it in circulation as `$model.$controller.$model.$controller....`

basically in simplified version is equal to following:

```ts
class Controller {
  constructor($model) {
    this.$model = $model;
  }
}
types.model({}).volatile(self => ({
  $controller: new Controller(self)
}));
```

---

### CAN I USE IT IN EXISTING PROJECT?

Yes you can. MSTB just bind the controller inside the volatile state which doesn't break current MST
structure.

```ts
class BoxCtrl extends Controller({
  width: types.number,
  height: types.number
}) {
  @computedAlive get boundingBox() {
    const { width, height } = this.$model;
    return { width, height };
  }
}
class Box extends Bundle(BoxCtrl) {}

const Model = types.model({
  box: Box.Store // <-- <Controller>.Store is MST Model
});
const model = Model.create({ box: { width: height } });
// now you can access controller from model
model.box.$controller.boundingBox; // BoxCtrl.boundingBox
```

---

### HOW TO CONVERT EXISTING MST model TO MSTB

It's very simple and straight forward to convert existing store to bundle.

- model props became Controller props
- views became `@computedAlive` getters
- actions became `@action` methods
- volatile became property of class
- accessing `self` model property would be change to `this.$model`
- accessing `self` any other member then property became `this`

Lets see an example

Original code:

```ts
const Store = types
  .model({
    title: types.string
  })
  .views(self => ({
    get upper() {
      return self.title.toUppoerCase();
    }
  }))
  .actions(self => ({
    setTitle(title: string) {
      self.title = title;
    }
  }))
  .volatile(self => ({
    temporaryValue: 24
  }));
```

Now let's see converted:

```ts
class StoreCtrl extends Controller({
  title: types.string
}) {
  @computedAlive get upper() {
    return this.$model.title.toUpperCase();
  }
  @action setTitle(title: string) {
    this.$model.title = title;
  }
  temporaryValue = 24;
}
class Store extends Bundle(StoreCtrl) {}
```

---

### HOW TO ACCESS MODEL FROM CONTROLLER

Its just simple as `this.$model`

```ts
class BoxCtrl extends Controller({
  width: types.number,
  height: types.number
}) {
  boundingBox = {
    width: this.$model.width,
    height: this.$model.height
  };
}
class Box extends Bundle(BoxCtrl) {}
```

---

### HOW TO ACCESS CTONROLLER FROM MODEL

Its just simple as `self.$controller`

```ts
class BoxCtrl extends Controller({
  width: types.number,
  height: types.number
}) {
  @computedAlive get boundingBox() {
    return {
      width: this.$model.width,
      height: this.$model.height
    }
}
class Box extends Bundle(BoxCtrl) {}

// box is MST model
const box = Box.Store.create({width: 0, heigth: 0});
// lets access controller method
box.$controller.boundingBox
// and of course cirulation works
box.$controller.$model.$controller.$model.$controller.$model === box // true
```

---

### HOW TO CREATE BUNDLE

There are two methods required to use. `Controller` and `Bundle`

```ts
class ContainerController extends Controller({}) {}
export class Container extends Bundle(ContainerController) {}
```

---

### IS BUNDLE REQUIRED?

Yes is required. The `Bundle` function does what it says, bundling controller and store
together. `$controller` wouldn't be injected into Store. Remember, we are working
in controller but all controllers are resolved from Stores.

```ts
class ContainerController extends Controller({}) {
  @action doSomething() {}
}
export class Container extends Bundle(ContainerController) {}

// WRONG ================
const Model = types.model({
  // we are using non bundled controller
  container: ContainerController.Store
});
// doSomething is undefined
Model.create().container.$controller.doSomething();

// GOOD ================
const Model = types.model({
  // we are using Store with injected $controller
  container: Container.Store
});
// works!
Model.craete().container.$controller.doSomething();
```

---

### HOW TO EXTEND CONTROLLER

```ts
class BoxController extends Controller({ title: types.string }) {
  @action setTitle(title: string) {
    this.$model.title = title;
  }
}
class Box extends Bundle(BoxController) {}

// Now we can extend it quite easily

class RectCtrl extends Box {
  @action setTitle(title: string) {
    this.$model = `rect - ${title}`;
    // or call super
    // super.setTitle(`rect - ${title}`);
  }
}
// Don't forget to Bundle it again :)
class Rect extends Bundle(RectCtrl) {}
```

---

### HOW TO EXTEND MODEL

Simply, you can't. Once model is created is non extendable. There is good reason for it.
It would bring vulnerability to your bundle if one of existing keys would be replaced
by a new type eg `title: types.string` to `title: types.number` your could end up
with runtime errors if your `setTitle()` expect work with string. There for mixin
and extending is no-go for now. **Composition** to the rescue!

Just simply create another bundle which will contain additional model keys plus
required model and expose any controller member.

```ts
class BoxController extends Controller({ title: types.string }) {
  @action setTitle(title: string) {
    this.$model.title = title;
  }
}
class Box extends Bundle(BoxController) {}

// Now we can extend it quite easily

class RectCtrl extends Controller({
  rectTitle: types.string,
  box: Box.Store
}) {
  @action setBoxTitle(title: string) {
    this.$model.box.$controller.setTitle();
  }
}
// Don't forget to Bundle it again :)
class Rect extends Bundle(RectCtrl) {}
```

---

### DOES BUNDLE NEED TO BE A CLASS

| JavaScript | TypeScript |
| ---------- | ---------- |
| NO         | YES        |

Its necessary to keep bundle as a class in TypeScript to simplify types, but not neccessary in Javascript.
In Javascript you can simply use method without class.

```js
class BoxCtrl extends Controller({}) {}
const Rect = Bundle(BoxCtrl);
```
