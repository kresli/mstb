// tslint:disable: no-empty
import { getRoot, unprotect } from "mobx-state-tree";
import { types } from "mobx-state-tree";
import { Bundle } from "./internal";
export function Controller(Props) {
    var Store = types
        .model()
        .props(Props)
        .actions(function (self) { return ({
        afterCreate: function () {
            self.$controller.$modelAfterCreate();
        },
        beforeDestroy: function () {
            self.$controller.$modelBeforeDestroy();
        },
        afterAttach: function () {
            self.$controller.$modelAfterAttach();
        }
    }); });
    var ControllerClass = /** @class */ (function () {
        function ControllerClass($model) {
            this.$model = $model;
            unprotect(getRoot(this.$model));
        }
        ControllerClass.prototype.$modelBeforeDestroy = function () { };
        ControllerClass.prototype.$modelAfterAttach = function () { };
        ControllerClass.prototype.$modelAfterCreate = function () { };
        ControllerClass.prototype.$resolveIdentifier = function () {
            return null;
        };
        ControllerClass.Props = Props;
        ControllerClass.Store = Store;
        return ControllerClass;
    }());
    return Bundle(ControllerClass);
}
