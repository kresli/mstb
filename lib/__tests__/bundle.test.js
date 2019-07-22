// tslint:disable: max-classes-per-file
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { types } from "mobx-state-tree";
import { action, Bundle, computedAlive, Controller } from "../src";
test("resolve bundle inside bundle", function () {
    var ChildController = /** @class */ (function (_super) {
        __extends(ChildController, _super);
        function ChildController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ChildController.prototype, "name", {
            get: function () {
                return this.$model.name;
            },
            enumerable: true,
            configurable: true
        });
        ChildController.prototype.setName = function (name) {
            this.$model.name = name;
        };
        __decorate([
            computedAlive
        ], ChildController.prototype, "name", null);
        __decorate([
            action
        ], ChildController.prototype, "setName", null);
        return ChildController;
    }(Controller({
        name: types.string
    })));
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Child;
    }(Bundle(ChildController)));
    var ParentController = /** @class */ (function (_super) {
        __extends(ParentController, _super);
        function ParentController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ParentController.prototype, "son", {
            get: function () {
                return this.$resolveIdentifier(Child, "son");
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            computedAlive
        ], ParentController.prototype, "son", null);
        return ParentController;
    }(Controller({
        name: types.string,
        age: types.number
    })));
    var Parent = /** @class */ (function (_super) {
        __extends(Parent, _super);
        function Parent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Parent;
    }(Bundle(ParentController)));
    var FamilyController = /** @class */ (function (_super) {
        __extends(FamilyController, _super);
        function FamilyController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(FamilyController.prototype, "parent", {
            get: function () {
                return this.$model.parent.$controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FamilyController.prototype, "kids", {
            get: function () {
                return this.$model.kids.map(function (k) { return k.$controller; });
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            computedAlive
        ], FamilyController.prototype, "parent", null);
        __decorate([
            computedAlive
        ], FamilyController.prototype, "kids", null);
        return FamilyController;
    }(Controller({
        parent: Parent.Store,
        kids: types.array(Child.Store)
    })));
    var Family = /** @class */ (function (_super) {
        __extends(Family, _super);
        function Family() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Family;
    }(Bundle(FamilyController)));
    var family = Family.create({
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
    var child = family.parent.son;
    expect(child).toBeDefined();
    expect(child).toEqual(family.kids[0]);
    child.setName("Jhon");
    expect(child.name).toEqual("Jhon");
    expect(family.parent.son.name).toEqual("Jhon");
});
