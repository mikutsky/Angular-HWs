import { Component } from "@angular/core";
interface IImageRec {
  src: string;
  alt?: string;
  title?: string;
}

@Component({
  selector: "img-control",
  template: `
    <div class="img-control">
      <img-viewer [image]="selectedImg"></img-viewer>
      <img-gallery
        [imageCollection]="preview"
        (onSelectImage)="handler($event)"
      ></img-gallery>
    </div>
  `,
  styleUrls: ["./img.control.css"]
})
export class ImgControl {
  public selectedImg: IImageRec = { src: "", alt: "", title: "" };
  public preview: IImageRec[] = [
    {
      src: "/assets/img.viewer/photo-01.jpg",
      alt: "Photo preview 1",
      title: "Photo title #1"
    },
    {
      src: "/assets/img.viewer/photo-02.jpg",
      alt: "Photo preview 2",
      title: "Photo title #2"
    },
    {
      src: "/assets/img.viewer/photo-03.jpg",
      alt: "Photo preview 3",
      title: "Photo title #3"
    },
    {
      src: "/assets/img.viewer/photo-04.jpg",
      alt: "Photo preview 4",
      title: "Photo title #4"
    }
  ];
  public handler($event: IImageRec): void {
    this.selectedImg = $event;
  }
}
