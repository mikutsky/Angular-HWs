import Actions from "./actions";
import { IImageRec } from "../interfaces/interfaces";
import ImageServiceCollection from "../services/image.service.collection";
import { Store } from "redux";

const { floor, random } = Math;
const { setInterval, clearInterval } = window;
const { empty, images } = ImageServiceCollection;
const { REFRESH_ALL, SELECT_IMAGE, NEXT_IMAGE, PREVIOUS_IMAGE } = Actions;

const gallerySize: number = 4;

class State {
  private _intervalHandler: number;
  public interval: number;
  public gallery: IImageRec[];
  public selectIndex: number;
  public resetIntervalNext(store: Store): void {
    clearInterval(this._intervalHandler);
    this._intervalHandler = setInterval(() => {
      if (this.selectIndex === this.gallery.length - 1)
        store.dispatch({ type: REFRESH_ALL });
      else store.dispatch({ type: NEXT_IMAGE });
    }, this.interval);
  }
  constructor() {
    this.interval = 2500;
    this.gallery = Array(gallerySize).fill(empty);
    this.selectIndex = 0;
  }
}

export default function reducer(state = new State(), action: any) {
  switch (action.type) {
    // Сгенерировать новый набор неповторяющихся случайных изображений галлереи
    case REFRESH_ALL:
      const currentImgCollection = images.filter((vImgC: IImageRec) =>
        state.gallery.every((vImgG: IImageRec) => vImgG !== vImgC)
      );
      state.gallery = state.gallery.map(() => {
        if (currentImgCollection.length < 1) return empty;
        const randImageIndex = floor(random() * currentImgCollection.length);
        const randImageRec = currentImgCollection[randImageIndex];
        currentImgCollection.splice(randImageIndex, 1);
        return randImageRec;
      });
      // Выбрать первую картинку из текцщего набора изображений галлереи
      state.selectIndex = 0;
      return state;
    // Выбрать картинку из текущего набора изображений галлереи по номеру
    case SELECT_IMAGE:
      state.selectIndex = action.index;
      return state;
    // Следущее изображение
    case NEXT_IMAGE:
      if (state.selectIndex < state.gallery.length - 1) state.selectIndex++;
      else state.selectIndex = 0;
      return state;
    // Предидущее изображение
    case PREVIOUS_IMAGE:
      if (state.selectIndex > 0) state.selectIndex--;
      else state.selectIndex = state.gallery.length - 1;
      return state;
    default:
      return state;
  }
}
