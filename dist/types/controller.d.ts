import { IModelType, Instance, IOptionalIType, ISimpleType, ModelProperties } from "mobx-state-tree";
export declare function Controller<P extends ModelProperties>(Props: P): Controller<P>;
export interface Controller<P extends ModelProperties = ModelProperties> {
    Props: P;
    Store: IModelType<P, {}>;
    new (...args: any[]): {
        $model: Instance<IModelType<P & {
            uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
        }, {}>>;
        $modelBeforeDestroy(): void;
        $modelAfterAttach(): void;
        $modelAfterCreate(): void;
    };
}
