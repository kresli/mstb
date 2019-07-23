import { IModelType, Instance, ModelProperties } from "mobx-state-tree";
export declare function Controller<P extends ModelProperties>(Props: P): Controller<P>;
export interface Controller<P extends ModelProperties = ModelProperties> {
    Props: P;
    Store: IModelType<P, {}>;
    new (...args: any[]): {
        $model: Instance<IModelType<P, {}>>;
        $modelBeforeDestroy(): void;
        $modelAfterAttach(): void;
        $modelAfterCreate(): void;
        $resolveIdentifier<T extends Controller>(bundleType: T, identifier: string): InstanceType<T> | null;
    };
}
