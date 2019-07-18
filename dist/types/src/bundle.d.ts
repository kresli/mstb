import { IAnyModelType, IModelType, Instance, IOptionalIType, ISimpleType } from "mobx-state-tree";
import { ExtractProps } from "mobx-state-tree/dist/internal";
import { Controller } from "./internal";
export declare function Bundle<TBase extends Controller>(Base: TBase): {
    new (...args: any[]): {
        $model: import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
            uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
        }, {
            $controller: InstanceType<TBase> & {
                $model: import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
                    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
                }, any>, Circular<TBase, IModelType<TBase["Props"] & {
                    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
                }, {
                    $controller: InstanceType<TBase>;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
            };
        }>, StoreType<TBase>>;
        $resolveIdentifier<T extends Controller<import("mobx-state-tree").ModelProperties>>(BundleType: T, uuid: string): any;
        $modelBeforeDestroy(): void;
        $modelAfterAttach(): void;
        $modelAfterCreate(): void;
    };
    Props: TBase["Props"];
    Store: StoreType<TBase>;
    create(snap: import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<TBase["Props"] & {
        uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
    }>>): import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
        uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
    }, {
        $controller: InstanceType<TBase> & {
            $model: import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
                uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
            }, any>, Circular<TBase, IModelType<TBase["Props"] & {
                uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
            }, {
                $controller: InstanceType<TBase>;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
        };
    }>, StoreType<TBase>>["$controller"];
} & TBase;
export interface Circular<C extends Controller, M extends IAnyModelType> extends IModelType<ExtractProps<M>, {
    $controller: InstanceType<C> & {
        $model: Instance<Circular<C, M>>;
    };
}> {
}
interface StoreType<TBase extends Controller> extends Circular<TBase, IModelType<TBase["Props"] & {
    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
}, {
    $controller: InstanceType<TBase>;
}>> {
}
export {};
