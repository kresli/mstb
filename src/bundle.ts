import {
  IAnyModelType,
  IModelType,
  Instance,
  IOptionalIType,
  ISimpleType,
  SnapshotIn,
  types
} from "mobx-state-tree";
import { ExtractProps } from "mobx-state-tree/dist/internal";
import { Controller } from "./internal";

export function Bundle<TBase extends Controller>(Base: TBase): Bundle<TBase> {
  type Store = StoreType<TBase>;
  const Store = Base.Store.named(Base.name).volatile(self => ({
    $controller: new Base(self)
  })) as Store;

  type P = TBase["Props"];
  class BundleBase extends Base {
    public static Props = Base.Props as P;
    public static Store = Store;

    public static OptionalStore(snapshot: SnapshotIn<Store>) {
      return types.optional(Store, snapshot);
    }
    public $model!: Instance<Store>;

    constructor(...args: any[]) {
      super(...args);
      this.$model = args[0];
    }
  }
  return BundleBase;
}

export interface Circular<C extends Controller, M extends IAnyModelType> {
  Props: C["Props"];
  Store: IModelType<
    ExtractProps<M>,
    {
      $controller: InstanceType<C> & {
        $model: Instance<Circular<C, M>["Store"]>;
      };
    }
  >;
  new (...args: any[]): InstanceType<C>;
}

type StoreType<TBase extends Controller> = Circular<
  TBase,
  IModelType<
    TBase["Props"] & { uuid: IOptionalIType<ISimpleType<string>, [undefined]> },
    { $controller: InstanceType<TBase> }
  >
>["Store"];

export interface Bundle<C extends Controller = any> {
  Store: StoreType<C>;
  Props: C["Props"];
  new (...args: any[]): {
    $model: Instance<
      IModelType<
        C["Props"] & {
          uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
        },
        {}
      >
    >;
    $modelBeforeDestroy(): void;
    $modelAfterAttach(): void;
    $modelAfterCreate(): void;
  };
}
