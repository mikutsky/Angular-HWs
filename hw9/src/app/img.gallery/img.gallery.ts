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
    this.gallery = [
      {
        src: "./assets/img.service/photo-01.jpg",
        alt: "Alt-1",
        title: "Title-1"
      },
      {
        src: "./assets/img.service/photo-02.jpg",
        alt: "Alt-2",
        title: "Title-2"
      },
      {
        src: "./assets/img.service/photo-03.jpg",
        alt: "Alt-3",
        title: "Title-3"
      },
      {
        src: "./assets/img.service/photo-04.jpg",
        alt: "Alt-4",
        title: "Title-4"
      }
    ];
  }

  public clickHandle(numImage: number): void {
    store.dispatch({ type: SELECT_IMAGE, image: this.gallery[numImage] });
  }
}
