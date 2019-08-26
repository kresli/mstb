// tslint:disable: no-empty
import {
  getRoot,
  IAnyStateTreeNode,
  IModelType,
  Instance,
  IOptionalIType,
  ISimpleType,
  isRoot,
  ModelProperties,
  unprotect
} from "mobx-state-tree";
import { types } from "mobx-state-tree";
import uuid from "uuid";
import { Bundle, computedAlive } from "./internal";

export function Controller<P extends ModelProperties>(Props: P): Controller<P> {
  const Store = types
    .model({
      uuid: types.optional(types.identifier, () => uuid())
    })
    .props(Props)
    .actions(self => ({
      afterCreate() {
        self.$controller.$modelAfterCreate();
      },
      beforeDestroy() {
        self.$controller.$modelBeforeDestroy();
      },
      afterAttach() {
        self.$controller.$modelAfterAttach();
      }
    }));
  class ControllerClass {
    public static Props = Props;
    public static Store = Store;
    constructor(public $model: Instance<typeof Store>) {
      unprotect(getRoot(this.$model as IAnyStateTreeNode));
    }
    @computedAlive public get $root(): InstanceType<Controller> {
      const model = this.$model as IAnyStateTreeNode;
      if (isRoot(model)) {
        return this;
      }
      return getRoot(model).$controller as InstanceType<Controller>;
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
        P & { uuid: IOptionalIType<ISimpleType<string>, [undefined]> },
        {}
      >
    >;
    $root: InstanceType<Controller>;
    $modelBeforeDestroy(): void;
    $modelAfterAttach(): void;
    $modelAfterCreate(): void;
    $resolveByType<T extends Controller>(BundleType: T): Array<InstanceType<T>>;
    $resolveByType<T extends Controller>(
      BundleType: T,
      uuid?: string
    ): InstanceType<T> | null;
  };
}
