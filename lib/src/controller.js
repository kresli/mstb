// tslint:disable: no-empty
import { getRoot, unprotect } from "mobx-state-tree";
import { types } from "mobx-state-tree";
import guid from "uuid";
import { Bundle } from "./internal";
export function Controller(Props) {
    const uuid = Props.uuid
        ? Props.uuid
        : types.optional(types.identifier, guid());
    const Store = types
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
            unprotect(getRoot(this.$model));
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
    return Bundle(ControllerClass);
}
