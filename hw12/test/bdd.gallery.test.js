// const {
//   assert: { equal, throws }
// } = require("chai");
// const { ** } = require("**");

describe("class GalleryViewComponent", () => {
  it("Поле photo. Всегда содержит объект IPhoto", () => {});
  it("Поле photo. Все поля IPhoto заполнены верными значениями", () => {});
  it("Поле photo. Все photo.src содержит правильный путь к изображению", () => {});
  it("Событие Store. getState().image объект типа IPhoto", () => {});
  it("Событие Store. getState().image все поля переданны верно", () => {});
  it("Событие Store. getState().image.src содержит правильный путь к изображению", () => {});
});

describe("GalleryPreviewComponent", () => {
  it("Поле photos. Всегда содержит массив из 6(шести) элементов", () => {});
  it("Поле photos. Все элементы массива объекты IPhoto", () => {});
  it("Поле photos. Все поля элементов массива заполнены верными значениями", () => {});
  it("Поле photos. Все поля src элементов массива содержит правильный путь к изображению", () => {});
  it("Обработчик события clickHandle(string). В store.dispatch передан объект {type: SELECT_IMAGE, image:IPhoto}", () => {});
  it("Обработчик события clickHandle(string). Переданный подобъект image содержит правильно заполненные поля", () => {});
  it("Обработчик события clickHandle(string). Поле подобъекта image.src содержит правильный путь к изображению", () => {});
});
