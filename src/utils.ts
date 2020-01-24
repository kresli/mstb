import { action, computed } from "mobx";
export { action };

export const computedAlive = computed({ keepAlive: true });

export const extractBundleArray = <T>(
  v: T[]
): T extends { $controller: infer U } ? U[] : never =>
  // @ts-ignore
  v.map(extractBundle);

export const extractBundle = <T>(
  v: T
): T extends { $controller: infer U } ? U : never =>
  // @ts-ignore
  v.$controller;

export const extractBundleObject = <
  T extends { [key: string]: { $controller: any } }
>(
  obj: T
): { [K in keyof T]: T[K]["$controller"] } =>
  // @ts-ignore
  Object.entries(obj).reduce(
    (o, [k, v]) => ({
      ...o,
      [k]: v.$controller
    }),
    {}
  );
