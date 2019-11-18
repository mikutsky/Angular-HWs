import { Component } from "@angular/core";
import { IPhoto } from "../../../../interfaces/photo.interface";

import store from "../../redux/store";
import Actions from "../../redux/actions";
const { SELECT_IMAGE } = Actions;

@Component({
  selector: "gallery-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.css"]
})
export class GalleryPreviewComponent {
  public photos: Array<IPhoto> = Array(6).fill({
    name: "Empty",
    src: "./assets/photos/photo.empty.jpg",
    id: "empty",
    data: "empty"
  });

  constructor() {
    this.photos = this.photos.map(
      (_: IPhoto, i: number): IPhoto => ({
        name: "Name " + i.toString(),
        src: `./assets/photos/photo-${("0" + i.toString()).slice(-2)}.jpg`,
        id: i.toString(),
        data: "01-02-23"
      })
    );
  }

  public clickHandle(id: string): void {
    store.dispatch({
      type: SELECT_IMAGE,
      image: this.photos[
        this.photos.findIndex((photo: IPhoto): boolean => photo.id === id)
      ]
    });
  }
}
