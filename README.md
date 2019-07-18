# MSTB

- [Single Bundle example](#simple-example)
- [Multi Bundle example](#quick-start)
- [API](#api)
- [Q&A](#how-to)
- [Best Practices](#best-practices)

## Simple bundle example

```ts
const childModel = {
  name: types.string,
  age: types.age
};
class ChildCtrl extends Controller(childModel) {
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
import { computedAlive, action, Controller, Bundle } from "mstb";
// child.ts
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

// or experimental Family.create({...}) to get $controller stright away.
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

> NOTE in following answers I asume you are using `Controller`, `Bundle` and
> `@computedAlive` from `mstb` package.

### CAN I USE IT IN EXISTING PROJECT? (TODO)

---

### HOW IT WORKS (TODO)

---

### HOW TO ACCESS MODEL FROM CONTROLLER (TODO)

---

### HOW TO ACCESS CTONROLLER FROM MODEL (TODO)

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

You can't. Once model is created is non extendable. There is good reason for it.
It would bring vulnerability to your bundle. If one of existing keys would be replaced
by new type eg `title: types.string` to `title: types.number` your could end up
with runtime errors if your `setTitle()` expect work with string. There for mixin
and extending is no go for now. **Composition** to the rescue!

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

In Javascript you can simply use method without class eg:

```js
class BoxCtrl extends Controller({}) {}
const Rect = Bundle(BoxCtrl);
```
