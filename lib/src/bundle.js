import { resolveIdentifier } from "mobx-state-tree";
export function Bundle(Base) {
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
            const model = resolveIdentifier(BundleType.Store, this.$model, uuid);
            return model ? model.$controller : null;
        }
    }
    BundleBase.Props = Base.Props;
    BundleBase.Store = Store;
    return BundleBase;
}
