import { Component, Input } from "@angular/core";
import { IImageRec } from "../interfaces/intrfaces";

@Component({
  selector: "img-viewer-component",
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
  @Input() public image: IImageRec;
}