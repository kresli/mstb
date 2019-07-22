"use strict";
// tslint:disable: max-classes-per-file
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_state_tree_1 = require("mobx-state-tree");
const src_1 = require("../src");
test("resolve bundle inside bundle", () => {
    class ChildController extends src_1.Controller({
        name: mobx_state_tree_1.types.string
    }) {
        get name() {
            return this.$model.name;
        }
        setName(name) {
            this.$model.name = name;
        }
    }
    __decorate([
        src_1.computedAlive
    ], ChildController.prototype, "name", null);
    __decorate([
        src_1.action
    ], ChildController.prototype, "setName", null);
    class Child extends src_1.Bundle(ChildController) {
    }
    class ParentController extends src_1.Controller({
        name: mobx_state_tree_1.types.string,
        age: mobx_state_tree_1.types.number
    }) {
        get son() {
            return this.$resolveIdentifier(Child, "son");
        }
    }
    __decorate([
        src_1.computedAlive
    ], ParentController.prototype, "son", null);
    class Parent extends src_1.Bundle(ParentController) {
    }
    class FamilyController extends src_1.Controller({
        parent: Parent.Store,
        kids: mobx_state_tree_1.types.array(Child.Store)
    }) {
        get parent() {
            return this.$model.parent.$controller;
        }
        get kids() {
            return this.$model.kids.map(k => k.$controller);
        }
    }
    __decorate([
        src_1.computedAlive
    ], FamilyController.prototype, "parent", null);
    __decorate([
        src_1.computedAlive
    ], FamilyController.prototype, "kids", null);
    class Family extends src_1.Bundle(FamilyController) {
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
