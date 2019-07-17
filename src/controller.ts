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
import guid from "uuid";
import { Bundle } from "./internal";

export function Controller<P extends ModelProperties>(Props: P): Controller<P> {
  const uuid = Props.uuid
    ? Props.uuid
    : types.optional(types.identifier, guid());
  const Store = types
    .model()
    .props({ uuid })
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
    // public $resolve<T extends Bundle>(
    //   bundleType: T,
    //   preicate: (bundle: Instance<T>) => boolean
    // ) {
    //   return [];
    // }
  }
  return Bundle(ControllerClass);
}

export interface Controller<P extends ModelProperties = ModelProperties> {
  Props: P;
  Store: IModelType<P, {}>;
  new (...args: any[]): {
    $model: Instance<
      IModelType<
        P & { uuid: IOptionalIType<ISimpleType<string>, [undefined]> },
        {}
      >
    >;
    $modelBeforeDestroy(): void;
    $modelAfterAttach(): void;
    $modelAfterCreate(): void;
    // $resolve<T extends Bundle>(
    //   bundleType: T,
    //   preicate: (bundle: Instance<T>) => boolean
    // ): Array<Instance<T>>;
  };
}
