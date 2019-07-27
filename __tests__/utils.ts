import { types } from "mobx-state-tree";
import {
  Bundle,
  Controller,
  extractBundle,
  extractBundleArray,
  extractBundleObject
} from "../src";

test("extractArray", () => {
  class BoxCtrl extends Controller({
    title: types.string
  }) {}
  class Box extends Bundle(BoxCtrl) {}

  const Model = types.model({
    boxes: types.array(Box.Store)
  });
  const model = Model.create({
    boxes: [{ title: "box-a" }]
  });
  expect(extractBundleArray(model.boxes)[0].$model.title).toEqual("box-a");
});

test("extractBundle", () => {
  class BoxCtrl extends Controller({
    title: types.string
  }) {}
  class Box extends Bundle(BoxCtrl) {}
  const box = Box.Store.create({ title: "box-a" });
  expect(extractBundle(box).$model.title).toEqual("box-a");
});

test("extractBundleObject", () => {
  class BoxCtrl extends Controller({
    title: types.string
  }) {}
  class Box extends Bundle(BoxCtrl) {}
  const model = types
    .model({
      box: Box.Store
    })
    .create({
      box: {
        title: "box-a"
      }
    });
  expect(extractBundleObject(model).box.$model.title).toEqual("box-a");
});
