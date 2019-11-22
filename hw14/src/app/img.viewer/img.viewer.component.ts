import { Component } from "@angular/core";
import { IImageRec } from "../interfaces/interfaces";

import store from "../redux/store";

@Component({
  selector: "img-viewer",
  template: `
    <div class="img-viewer-container">
      <img
        class="img-viewer-picture"
        [src]="image.src"
        [title]="image.title"
        [alt]="image.alt"
      />
    </div>
  `,
  styleUrls: ["./img.viewer.component.css"]
})
export class ImgViewerComponent {
  public image: IImageRec;

  constructor() {
    this.image = {
      src: "./assets/img.service/photo.empty.jpg",
      alt: "empty",
      title: "empty"
    };
    store.subscribe(() => {
      this.image = store.getState().image;
    });
  }
}
