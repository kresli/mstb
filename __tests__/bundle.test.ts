// tslint:disable: max-classes-per-file

import { computed } from "mobx";
import { types } from "mobx-state-tree";
import { Bundle, Controller } from "../src";

test("resolve bundle inside bundle", () => {
  class Child extends Bundle(
    class ChildController extends Controller({
      name: types.string
    }) {}
  ) {}
  class Parent extends Bundle(
    class ParentController extends Controller({
      name: types.string,
      age: types.number
    }) {
      public getChild() {
        return this.$resolve(Child, child => child.name === "Peter");
      }
    }
  ) {}
  class FamilyController extends Controller({
    parent: Bundle(Parent).Store,
    kids: types.array(Child.Store)
  }) {
    @computed get parent() {
      return this.$model.parent.$controller;
    }
    @computed get kids() {
      return this.$model.kids.map(k => k.$controller);
    }
  }
  class Family extends Bundle(FamilyController) {}
  const family = Bundle(Family).Store.create({
    parent: {
      name: "Jhon",
      age: 36
    },
    kids: [
      {
        name: "Peter"
      }
    ]
  }).$controller;
  expect(family.parent.getChild());
});
