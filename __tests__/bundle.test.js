// tslint:disable: max-classes-per-file
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { types } from "mobx-state-tree";
import { action, Bundle, computedAlive, Controller } from "../src";
test("resolve bundle inside bundle", () => {
    class ChildController extends Controller({
        name: types.string
    }) {
        get name() {
            return this.$model.name;
        }
        setName(name) {
            this.$model.name = name;
        }
    }
    __decorate([
        computedAlive
    ], ChildController.prototype, "name", null);
    __decorate([
        action
    ], ChildController.prototype, "setName", null);
    class Child extends Bundle(ChildController) {
    }
    class ParentController extends Controller({
        name: types.string,
        age: types.number
    }) {
        get son() {
            return this.$resolveIdentifier(Child, "son");
        }
    }
    __decorate([
        computedAlive
    ], ParentController.prototype, "son", null);
    class Parent extends Bundle(ParentController) {
    }
    class FamilyController extends Controller({
        parent: Parent.Store,
        kids: types.array(Child.Store)
    }) {
        get parent() {
            return this.$model.parent.$controller;
        }
        get kids() {
            return this.$model.kids.map(k => k.$controller);
        }
    }
    __decorate([
        computedAlive
    ], FamilyController.prototype, "parent", null);
    __decorate([
        computedAlive
    ], FamilyController.prototype, "kids", null);
    class Family extends Bundle(FamilyController) {
    }
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
                name: "Anna"
            }
        ]
    });
    const child = family.parent.son;
    expect(child).toBeDefined();
    expect(child).toEqual(family.kids[0]);
    child.setName("Jhon");
    expect(child.name).toEqual("Jhon");
    expect(family.parent.son.name).toEqual("Jhon");
});
