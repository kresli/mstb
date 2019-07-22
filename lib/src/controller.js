"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-empty
const mobx_state_tree_1 = require("mobx-state-tree");
const mobx_state_tree_2 = require("mobx-state-tree");
const uuid_1 = __importDefault(require("uuid"));
const internal_1 = require("./internal");
function Controller(Props) {
    const uuid = Props.uuid
        ? Props.uuid
        : mobx_state_tree_2.types.optional(mobx_state_tree_2.types.identifier, uuid_1.default());
    const Store = mobx_state_tree_2.types
        .model()
        .props({ uuid })
        .props(Props)
        .actions(self => ({
        afterCreate() {
            self.$controller.$modelAfterCreate();
        },
        beforeDestroy() {
            self.$controller.$modelBeforeDestroy();
        },
        afterAttach() {
            self.$controller.$modelAfterAttach();
        }
    }));
    class ControllerClass {
        constructor($model) {
            this.$model = $model;
            mobx_state_tree_1.unprotect(mobx_state_tree_1.getRoot(this.$model));
        }
        $modelBeforeDestroy() { }
        $modelAfterAttach() { }
        $modelAfterCreate() { }
        $resolveIdentifier() {
            return null;
        }
    }
    ControllerClass.Props = Props;
    ControllerClass.Store = Store;
    return internal_1.Bundle(ControllerClass);
}
exports.Controller = Controller;
