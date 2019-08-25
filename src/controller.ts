// tslint:disable: no-empty
import {
  getRoot,
  IAnyStateTreeNode,
  IModelType,
  Instance,
  IOptionalIType,
  ISimpleType,
  ModelProperties,
  unprotect
} from "mobx-state-tree";
import { types } from "mobx-state-tree";
import uuid from "uuid";
import { Bundle } from "./internal";

export function Controller<P extends ModelProperties>(Props: P): Controller<P> {
  const Store = types
    .model({
      guid: types.optional(types.identifier, () => uuid())
    })
    .props(Props)
    .actions(self => ({
      afterCreate() {
        (self as { $controller: any }).$controller.$modelAfterCreate();
      },
      beforeDestroy() {
        (self as { $controller: any }).$controller.$modelBeforeDestroy();
      },
      afterAttach() {
        (self as { $controller: any }).$controller.$modelAfterAttach();
      }
    }));
  class ControllerClass {
    public static Props = Props;
    public static Store = Store;
    constructor(public $model: Instance<typeof Store>) {
      unprotect(getRoot(this.$model as IAnyStateTreeNode));
    }
    public $modelBeforeDestroy() {}
    public $modelAfterAttach() {}
    public $modelAfterCreate() {}
    public $resolveByType() {
      return [];
    }
  }
  return Bundle(ControllerClass as Controller<P>);
}

export interface Controller<P extends ModelProperties = ModelProperties> {
  Props: P;
  Store: IModelType<P, {}>;
  new (...args: any[]): {
    $model: Instance<
      IModelType<
        P & { guid: IOptionalIType<ISimpleType<string>, [undefined]> },
        {}
      >
    >;
    $modelBeforeDestroy(): void;
    $modelAfterAttach(): void;
    $modelAfterCreate(): void;
    $resolveByType<T extends Controller>(BundleType: T): Array<InstanceType<T>>;
    $resolveByType<T extends Controller>(
      BundleType: T,
      guid?: string
    ): InstanceType<T> | null;
  };
}
