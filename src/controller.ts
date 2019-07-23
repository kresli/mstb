// tslint:disable: no-empty
import {
  getRoot,
  IAnyStateTreeNode,
  IModelType,
  Instance,
  ModelProperties,
  unprotect
} from "mobx-state-tree";
import { types } from "mobx-state-tree";
import { Bundle } from "./internal";

export function Controller<P extends ModelProperties>(Props: P): Controller<P> {
  const Store = types
    .model()
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
    public $resolveIdentifier() {
      return null;
    }
  }
  return Bundle(ControllerClass);
}

export interface Controller<P extends ModelProperties = ModelProperties> {
  Props: P;
  Store: IModelType<P, {}>;
  new (...args: any[]): {
    $model: Instance<IModelType<P, {}>>;
    $modelBeforeDestroy(): void;
    $modelAfterAttach(): void;
    $modelAfterCreate(): void;
    $resolveIdentifier<T extends Controller>(
      bundleType: T,
      identifier: string
    ): InstanceType<T> | null;
  };
}
