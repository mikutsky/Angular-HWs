import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IImageRec } from "../interfaces/intrfaces";

@Component({
  selector: "img-gallery-component",
  template: `
    <div class="img-gallery-container">
      <img
        class="img-gallery-picture"
        *ngFor="let item of imageCollection; let numImage = index"
        [src]="item.src"
        [title]="item.title"
        [alt]="item.alt"
        (click)="clickHandle(numImage)"
      />
    </div>
  `,
  styleUrls: ["./img.gallery.component.css"]
})
export class ImgGalleryComponent {
  @Input() public imageCollection: IImageRec[];
  @Output() public onSelectImage: EventEmitter<IImageRec> = new EventEmitter();

  public clickHandle(numImage: number): void {
    this.onSelectImage.emit(this.imageCollection[numImage]);
  }
}
