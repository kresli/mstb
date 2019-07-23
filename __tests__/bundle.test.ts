// tslint:disable: max-classes-per-file

import { types } from "mobx-state-tree";
import { action, Bundle, computedAlive, Controller } from "../src";

test("resolve bundle inside bundle", () => {
  class ChildController extends Controller({
    uuid: types.identifier,
    name: types.string
  }) {
    @computedAlive public get name() {
      return this.$model.name;
    }
    @action public setName(name: string) {
      this.$model.name = name;
    }
  }
  class Child extends Bundle(ChildController) {}

  class ParentController extends Controller({
    name: types.string,
    age: types.number
  }) {
    @computedAlive public get son() {
      return this.$resolveIdentifier(Child, "son");
    }
  }
  class Parent extends Bundle(ParentController) {}
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
  class Family extends Bundle(FamilyController) {}
  const family = Family.create({
    parent: {
      name: "Jhon",
      age: 36
    },
    kids: [
      {
        uuid: "son",
        name: "Peter"
      },
      {
        uuid: "daughter",
        name: "Anna"
      }
    ]
  });
  const child = family.parent.son!;
  expect(child).toBeDefined();
  expect(child).toEqual(family.kids[0]);
  child.setName("Jhon");
  expect(child.name).toEqual("Jhon");
  expect(family.parent.son!.name).toEqual("Jhon");
});
