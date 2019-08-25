// tslint:disable: max-classes-per-file
import { cast, types } from "mobx-state-tree";
import { action, Bundle, computedAlive, Controller } from "../src";

test("circular", () => {
  class ChildController extends Controller({
    name: types.optional(types.string, "")
  }) {
    @computedAlive public get name() {
      return this.$model.name;
    }
  }
  class Child extends Bundle(ChildController) {}
  const child = Child.Store.create({}).$controller;
  expect(
    child.$model.$controller.$model.$controller.$model.$controller
  ).toEqual(child);
});

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
      return this.$resolveByType(Child, "son");
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

test("resolveIdentifier fallback to null if not found", () => {
  class Child extends Bundle(Controller({})) {}
  class ParentCtrl extends Controller({}) {
    @computedAlive public get unresolvedReference() {
      return this.$resolveByType(Child, "");
    }
  }
  class Parent extends Bundle(ParentCtrl) {}
  expect(Parent.Store.create({}).$controller.unresolvedReference).toHaveLength(
    0
  );
});

test("resolveIdentifier return Bundle", () => {
  class Child extends Bundle(
    class extends Controller({
      uuid: types.identifier
    }) {}
  ) {}
  class ParentCtrl extends Controller({
    children: types.array(Child.Store)
  }) {
    @computedAlive public get child() {
      return this.$resolveByType(Child, "child");
    }
  }
  class Parent extends Bundle(ParentCtrl) {}
  const parent = Parent.Store.create({
    children: [{ uuid: "child" }]
  }).$controller;
  expect(parent.child!.$model).toBe(parent.$model.children[0]);
});

test("call $modelBeforeDestroy on destroy", () => {
  const destroySpy = jest.fn();
  class Child extends Bundle(
    class extends Controller({ title: types.string }) {
      public $modelBeforeDestroy() {
        destroySpy();
      }
    }
  ) {}
  class ParentCtrl extends Controller({
    children: types.array(Child.Store)
  }) {
    @computedAlive public get unresolvedReference() {
      return this.$resolveByType(Child, "");
    }
  }
  class Parent extends Bundle(ParentCtrl) {}
  const parent = Parent.Store.create({
    children: [{ title: "child" }]
  }).$controller;
  expect(parent.$model.children).toHaveLength(1);
  expect(destroySpy).toHaveBeenCalledTimes(0);
  parent.$model.children = cast([]);
  expect(parent.$model.children).toHaveLength(0);
  expect(destroySpy).toHaveBeenCalledTimes(1);
});

test("$resolveByType", () => {
  class ChildCtrl extends Controller({ title: types.string }) {
    @computedAlive public get all() {
      return this.$resolveByType(Child);
    }
  }
  class Child extends Bundle(ChildCtrl) {}
  class ParentCtrl extends Controller({
    children: types.array(Child.Store)
  }) {
    @computedAlive public get children() {
      return this.$model.children.map(({ $controller }) => $controller);
    }
  }
  class Parent extends Bundle(ParentCtrl) {}
  const parent = Parent.Store.create({
    children: [{ title: "child-a" }, { title: "child-b" }]
  }).$controller;
  expect(parent.children[0].all).toHaveLength(2);
});

test("resolveByType should recomputed only on data changes", () => {
  class ChildCtrl extends Controller({ title: types.string }) {
    @computedAlive public get all() {
      return this.$resolveByType(Child);
    }
  }
  class Child extends Bundle(ChildCtrl) {}
  class ParentCtrl extends Controller({
    children: types.array(Child.Store)
  }) {
    @computedAlive public get children() {
      return this.$model.children.map(({ $controller }) => $controller);
    }
  }
  class Parent extends Bundle(ParentCtrl) {}
  const parent = Parent.Store.create({
    children: [{ title: "child-a" }, { title: "child-b" }]
  }).$controller;
  const child = parent.children[0];
  jest.spyOn(child, "$resolveByType");
  expect(child.$resolveByType).not.toHaveBeenCalled();
  expect(parent.children[0].all).toHaveLength(2);
  expect(child.$resolveByType).toHaveBeenCalledTimes(1);
  expect(parent.children[0].all).toHaveLength(2);
  expect(child.$resolveByType).toHaveBeenCalledTimes(1);

  parent.$model.children.push({ title: "child-c" });

  expect(parent.children[0].all).toHaveLength(3);
  expect(child.$resolveByType).toHaveBeenCalledTimes(2);
});
