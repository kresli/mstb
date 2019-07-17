import { IAnyModelType, IModelType, Instance, IOptionalIType, ISimpleType, ModelProperties } from "mobx-state-tree";
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
                }, any>, IModelType<TBase["Props"] & {
                    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
                }, any, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            };
        }>, IModelType<TBase["Props"] & {
            uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
        }, {
            $controller: InstanceType<TBase> & {
                $model: import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
                    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
                }, any>, IModelType<TBase["Props"] & {
                    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
                }, any, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            };
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        $modelBeforeDestroy(): void;
        $modelAfterAttach(): void;
        $modelAfterCreate(): void;
    };
    Props: TBase["Props"];
    Store: IModelType<TBase["Props"] & {
        uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
    }, {
        $controller: InstanceType<TBase> & {
            $model: import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
                uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
            }, any>, IModelType<TBase["Props"] & {
                uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
            }, any, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        };
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
    OptionalStore(snapshot: import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<TBase["Props"] & {
        uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
    }>>): IOptionalIType<IModelType<TBase["Props"] & {
        uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
    }, {
        $controller: InstanceType<TBase> & {
            $model: import("mobx-state-tree/dist/internal").STNValue<import("mobx-state-tree").ModelInstanceType<TBase["Props"] & {
                uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
            }, any>, IModelType<TBase["Props"] & {
                uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
            }, any, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        };
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & TBase;
export interface Circular<C extends Controller, M extends IAnyModelType> {
    Props: C["Props"];
    Store: IModelType<ExtractProps<M>, {
        $controller: InstanceType<C> & {
            $model: Instance<Circular<C, M>["Store"]>;
        };
    }>;
    new (...args: any[]): InstanceType<C>;
}
export declare type StoreType<TBase extends Controller> = Circular<TBase, IModelType<TBase["Props"] & {
    uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
}, {
    $controller: InstanceType<TBase>;
}>>["Store"];
export interface Bundle<S extends IAnyModelType = IAnyModelType, P extends ModelProperties = ModelProperties> {
    Store: S;
    Props: P;
    new (...args: any): {
        $model: Instance<S>;
    };
}
