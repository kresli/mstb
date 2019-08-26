import {
  IAnyModelType,
  IModelType,
  Instance,
  IOptionalIType,
  ISimpleType,
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

    public $model!: Instance<IAnyModelType>;
    constructor(...args: any[]) {
      super(...args);
      this.$model = args[0];
    }
    public $resolveByType<T extends Controller>(
      BundleType: T
    ): Array<InstanceType<T>>;
    public $resolveByType<T extends Controller>(
      BundleType: T,
      uuid?: string
    ): InstanceType<T> | null;
    public $resolveByType<T extends Controller>(BundleType: T, uuid?: string) {
      if (uuid) {
        const model =
          resolveIdentifier(BundleType.Store, this.$model, uuid) || null;
        return model ? model.$controller : null;
      }
      const cache = Array.from(
        this.$root.$model.$treenode.identifierCache.cache.values()
      ) as Array<Array<{ type: IAnyModelType; $controller: any }>>;
      const models = cache.reduce((a, v) => [...a, ...v], []);
      const filtered = models.filter(m => m.type === BundleType.Store);
      return filtered.map(({ $controller }) => $controller);
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
    IModelType<
      TBase["Props"] & {
        uuid: IOptionalIType<ISimpleType<string>, [undefined]>;
      },
      {
        $controller: InstanceType<TBase>;
      }
    >
  > {}
