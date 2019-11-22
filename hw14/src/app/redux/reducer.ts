import Actions from "./actions";
import { IImageRec } from "../interfaces/interfaces";

const { SELECT_IMAGE } = Actions;

class State {
  public image: IImageRec;
  constructor() {
    this.image = {
      src: "./assets/img.service/photo.empty.jpg",
      alt: "empty",
      title: "empty"
    };
  }
}

export default function reducer(state = new State(), action: any) {
  const newState = new State();
  switch (action.type) {
    case SELECT_IMAGE:
      newState.image = action.image;
      return newState;
    default:
      return state;
  }
}
