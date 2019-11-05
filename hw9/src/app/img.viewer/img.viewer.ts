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
      <div class="img-viewer-control" [title]="image.title">
        <div
          controlViewer
          class="image-viewer-previous"
          (click)="controlHandle('PREVIOUS_IMAGE')"
        ></div>
        <div
          controlViewer
          class="image-viewer-next"
          (click)="controlHandle('NEXT_IMAGE')"
        ></div>
      </div>
    </div>
  `,
  styleUrls: ["./img.viewer.css"]
})
export class ImgViewerComponent {
  public image: IImageRec;

  constructor() {
    store.subscribe(() => {
      this.image = store.getState().gallery[store.getState().selectIndex];
    });
    store.getState().resetIntervalNext(store);
  }

  public controlHandle(action: String) {
    store.dispatch({ type: action });
    store.getState().resetIntervalNext(store);
  }
}
