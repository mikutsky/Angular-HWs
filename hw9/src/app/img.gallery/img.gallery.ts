import { Component } from "@angular/core";
import { IImageRec } from "../interfaces/interfaces";

import store from "../redux/store";
import Actions from "../redux/actions";
const { SELECT_IMAGE } = Actions;

@Component({
  selector: "img-gallery",
  template: `
    <div class="img-gallery-container">
      <img
        hoverBorder
        class="img-gallery-picture"
        *ngFor="let item of gallery; let numImage = index"
        [src]="item.src"
        [title]="item.title"
        [alt]="item.alt"
        (click)="clickHandle(numImage)"
      />
    </div>
  `,
  styleUrls: ["./img.gallery.css"]
})
export class ImgGalleryComponent {
  public gallery: IImageRec[];

  constructor() {
    store.subscribe(() => {
      this.gallery = store.getState().gallery;
    });
  }

  public clickHandle(numImage: number): void {
    store.dispatch({ type: SELECT_IMAGE, index: numImage });
    store.getState().resetIntervalNext(store);
  }
}
