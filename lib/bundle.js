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
import { resolveIdentifier } from "mobx-state-tree";
export function Bundle(Base) {
    var Store = Base.Store.named(Base.name).volatile(function (self) { return ({
        $controller: new BundleBase(self)
    }); });
    var BundleBase = /** @class */ (function (_super) {
        __extends(BundleBase, _super);
        function BundleBase() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.$model = args[0];
            return _this;
        }
        BundleBase.create = function (snap) {
            // @todo this should be properly infered from Store.
            return Store.create(snap)
                .$controller;
        };
        BundleBase.prototype.$resolveIdentifier = function (BundleType, guid) {
            var model = resolveIdentifier(BundleType.Store, this.$model, guid);
            return model ? model.$controller : null;
        };
        BundleBase.Props = Base.Props;
        BundleBase.Store = Store;
        return BundleBase;
    }(Base));
    return BundleBase;
}
