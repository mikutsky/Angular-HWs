import Actions from "./actions";
import { IPhoto } from "../../../interfaces/photo.interface";

const { SELECT_IMAGE } = Actions;

class State {
  public image: IPhoto;
  constructor() {
    this.image = {
      id: "empty",
      src: "./assets/photos/photo.empty.jpg",
      name: "empty",
      data: "empty"
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
