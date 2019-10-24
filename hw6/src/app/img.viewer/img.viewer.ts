import { Component, Input } from "@angular/core";
interface IImageRec {
  src: string;
  alt?: string;
  title?: string;
}

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
  styleUrls: ["./img.viewer.css"]
})
export class ImgViewer {
  @Input() public image: IImageRec;
}
