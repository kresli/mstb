import {
  getRoot,
  IAnyModelType,
  IModelType,
  Instance,
  IOptionalIType,
  ModelProperties,
  SnapshotIn,
  types,
  unprotect
} from "mobx-state-tree";
import { ExtractProps, ISimpleType } from "mobx-state-tree/dist/internal";
import UUID from "uuid";

export interface Controller<P extends ModelProperties = ModelProperties> {
  Props: P;
  Store: IModelType<P, {}>;
  new (...args: any[]): {
    $model: Instance<IModelType<P & { uuid: ISimpleType<string> }, {}>>;
    $modelBeforeDestroy(): void;
    $modelAfterAttach(): void;
    $modelAfterCreate(): void;
  };
}
export interface Bundle<
  S extends IAnyModelType = IAnyModelType,
  P extends ModelProperties = ModelProperties
> {
  Store: S;
  Props: P;
  new (...args: any): {
    $model: Instance<S>;
  };
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
export function Bundle<TBase extends Controller>(Base: TBase) {
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

export function Controller<P extends ModelProperties>(Props: P): Controller<P> {
  const uuid = Props.uuid
    ? Props.uuid
    : types.optional(types.identifier, UUID());
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
      unprotect(getRoot(this.$model));
    }
    // tslint:disable-next-line:no-empty
    public $modelBeforeDestroy() {}
    // tslint:disable-next-line:no-empty
    public $modelAfterAttach() {}
    // tslint:disable-next-line:no-empty
    public $modelAfterCreate() {}
  }
  return Bundle(ControllerClass);
}

export interface BundleType extends ReturnType<typeof Bundle> {}
