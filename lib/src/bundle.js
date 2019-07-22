"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_state_tree_1 = require("mobx-state-tree");
function Bundle(Base) {
    const Store = Base.Store.named(Base.name).volatile(self => ({
        $controller: new BundleBase(self)
    }));
    class BundleBase extends Base {
        constructor(...args) {
            super(...args);
            this.$model = args[0];
        }
        static create(snap) {
            // @todo this should be properly infered from Store.
            return Store.create(snap)
                .$controller;
        }
        $resolveIdentifier(BundleType, uuid) {
            const model = mobx_state_tree_1.resolveIdentifier(BundleType.Store, this.$model, uuid);
            return model ? model.$controller : null;
        }
    }
    BundleBase.Props = Base.Props;
    BundleBase.Store = Store;
    return BundleBase;
}
exports.Bundle = Bundle;
