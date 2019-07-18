# MSTB

```ts
import { computedAlive, action, Controller, Bundle } from "mstb";
// child.ts
class ChildController extends Controller({
  name: types.string
}) {
  @computedAlive public get name() {
    return this.$model.name;
  }
  @action public setName(name: string) {
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
  @computedAlive public get son() {
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
