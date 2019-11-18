import { Component } from "@angular/core";
import { IPhoto } from "../../../../interfaces/photo.interface";

import store from "../../redux/store";

@Component({
  selector: "gallery-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class GalleryViewComponent {
  public photo: IPhoto;

  constructor() {
    this.photo = {
      name: "Empty",
      src: "./assets/photos/photo.empty.jpg",
      id: "empty",
      data: "empty"
    };
    store.subscribe(() => {
      this.photo = store.getState().image;
    });
  }
}
