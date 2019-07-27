import {
  IAnyModelType,
  IModelType,
  Instance,
  resolveIdentifier,
  SnapshotIn
} from "mobx-state-tree";
import { ExtractProps } from "mobx-state-tree/dist/internal";
import { Controller } from "./internal";

export function Bundle<TBase extends Controller>(Base: TBase) {
  type Store = StoreType<TBase>;
  const Store = Base.Store.named(Base.name).volatile(self => ({
    $controller: new BundleBase(self)
  })) as Store;

  type P = TBase["Props"];
  class BundleBase extends Base {
    public static Props = Base.Props as P;
    public static Store = Store;

    public static create(
      snap: SnapshotIn<Store>
    ): Instance<Store>["$controller"] {
      // @todo this should be properly infered from Store.
      return (Store.create(snap) as { $controller: any })
        .$controller as Instance<Store>["$controller"];
    }
    public $model!: Instance<Store>;

    constructor(...args: any[]) {
      super(...args);
      this.$model = args[0];
    }
    public $resolveIdentifier<T extends Controller>(
      BundleType: T,
      guid: string
    ) {
      const model = resolveIdentifier(BundleType.Store, this.$model, guid);
      return model ? model.$controller : null;
    }
  }
  return BundleBase;
}

export interface BundleType extends ReturnType<typeof Bundle> {}

export interface Circular<C extends Controller, M extends IAnyModelType>
  extends IModelType<
    ExtractProps<M>,
    {
      $controller: InstanceType<C> & {
        $model: Instance<Circular<C, M>>;
      };
    }
  > {}
export interface StoreType<TBase extends Controller = any>
  extends Circular<
    TBase,
    IModelType<TBase["Props"], { $controller: InstanceType<TBase> }>
  > {}
