import { Component, OnInit, OnDestroy } from "@angular/core";
import { IImageRec } from "../interfaces/intrfaces";
import { ImageService } from "../services/image.service";

@Component({
  selector: "img-control-component",
  template: `
    <div class="img-control">
      <img-viewer-component [image]="viewerImg"></img-viewer-component>
      <img-gallery-component
        [imageCollection]="galleryImg"
        (onSelectImage)="handlerSelectImg($event)"
      ></img-gallery-component>
    </div>
  `,
  styleUrls: ["./img.control.component.css"]
})
export class ImgControlComponent implements OnInit, OnDestroy {
  public galleryImg: IImageRec[] = this.imageService.randomGalleryImages();
  public viewerImg: IImageRec = this.imageService.randomViewerImage();
  // Сообщаем сервису, что выбранно изображение из галлереи, и загружаем его во вьювер
  public handlerSelectImg($event: IImageRec): void {
    this.imageService.viewerImage = $event;
    this.viewerImg = this.imageService.viewerImage;
  }

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    // Подпишемся на событие обновления галлереи
    this.imageService.sourceGalleryImages.subscribe(
      (dataGalleryImg: IImageRec[]) => {
        this.galleryImg = dataGalleryImg;
      }
    );
    // Подпишемся на событие обновления просмоторщика
    this.imageService.sourceViewerImage.subscribe(
      (dataViewerImg: IImageRec) => {
        this.viewerImg = dataViewerImg;
      }
    );
  }
  // Отпишемся от события обновления просмоторщика и галлереи
  ngOnDestroy(): void {
    this.imageService.sourceGalleryImages.unsubscribe();
    this.imageService.sourceViewerImage.unsubscribe();
  }
}
