import { Component, Input, Output, EventEmitter } from "@angular/core";
interface IImageRec {
  src: string;
  alt?: string;
  title?: string;
}

@Component({
  selector: "img-gallery",
  template: `
    <div class="img-gallery-container">
      <img
        class="img-gallery-picture"
        [src]="imageCollection[0].src"
        [title]="imageCollection[0].title"
        [alt]="imageCollection[0].alt"
        (click)="clickHandle(0)"
      />
      <img
        class="img-gallery-picture"
        [src]="imageCollection[1].src"
        [title]="imageCollection[1].title"
        [alt]="imageCollection[1].alt"
        (click)="clickHandle(1)"
      />
      <img
        class="img-gallery-picture"
        [src]="imageCollection[2].src"
        [title]="imageCollection[2].title"
        [alt]="imageCollection[2].alt"
        (click)="clickHandle(2)"
      />
      <img
        class="img-gallery-picture"
        [src]="imageCollection[3].src"
        [title]="imageCollection[3].title"
        [alt]="imageCollection[3].alt"
        (click)="clickHandle(3)"
      />
    </div>
  `,
  styleUrls: ["./img.gallery.css"]
})
export class ImgGallery {
  @Input() public imageCollection: IImageRec[];
  @Output() public onSelectImage: EventEmitter<IImageRec> = new EventEmitter();

  public clickHandle(numImage: number): void {
    this.onSelectImage.emit(this.imageCollection[numImage]);
  }
}
