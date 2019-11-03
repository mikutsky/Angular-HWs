import { EventEmitter } from "@angular/core";
import { IImageRec } from "../interfaces/intrfaces";
import { ImageServiceCollection } from "./image.service.collection";

const { random, floor } = Math;
const { setInterval, clearInterval } = window;

export class ImageService {
  private _refreshInterval: number;       // Интервал обновления слайдера (галерреи и просмоторщика)
  private _viewerInterval: number;        // Указатели интервалов обновления просмоторщика и галлереи
  private _galleryInterval: number;
  private _imageEmpty: IImageRec;         // Пустое изображение
  private _imageCollection: IImageRec[];  // Коллекция всех изображения
  private _viewerImage: IImageRec;        // Текущее изображение просмоторщика
  private _galleryImages: IImageRec[];    // Текущая набор изображений галлереи

  // Генераторы событий обновления изображений (галлереи и просмоторщика)
  public sourceViewerImage: EventEmitter<IImageRec> = new EventEmitter();
  public sourceGalleryImages: EventEmitter<IImageRec[]> = new EventEmitter();

  // Получить изображение просмоторщика
  public get viewerImage(): IImageRec {
    return this._viewerImage;
  }

  // Получить текущую коллекцию изображений галлереи
  public get galleryImages(): IImageRec[] {
    return this._galleryImages;
  }

  // Устанавливаем изображение просмоторщика
  public set viewerImage(setImg: IImageRec) {
    this.restartGalleryIntervat(); // рестарт таймера галлереи, ИМХО с ним лучше
    this.restartViewerIntervat();
    this._viewerImage = setImg;
  }

  // Рестарт интервалов обновления просмоторщика
  private restartViewerIntervat(): number {
    clearInterval(this._viewerInterval);
    this._viewerInterval = setInterval(
      () => this.sourceViewerImage.emit(this.randomViewerImage()),
      this._refreshInterval
    );
    return this._viewerInterval;
  }

  // Рестарт интервалов обновления галлереи
  private restartGalleryIntervat(): number {
    clearInterval(this._galleryInterval);
    this._galleryInterval = setInterval(
      () => this.sourceGalleryImages.emit(this.randomGalleryImages()),
      this._refreshInterval
    );
    return this._galleryInterval;
  }

  // Выбрать случайную картинку из текцщего набора изображений галлереи
  public randomViewerImage(): IImageRec {
    this._viewerImage = this._galleryImages[
      floor(random() * this._galleryImages.length)
    ];
    return this._viewerImage;
  }

  // Сгенерировать новый набор неповторяющихся случайных изображений галлереи
  public randomGalleryImages(): IImageRec[] {
    const currentImgCollection = this._imageCollection.filter(
      (vImgC: IImageRec) =>
        this._galleryImages.every((vImgG: IImageRec) => vImgG !== vImgC)
    );
    this._galleryImages = this._galleryImages.map(() => {
      if (currentImgCollection.length < 1) return this._imageEmpty;
      const randImageIndex = floor(random() * currentImgCollection.length);
      const randImageRec = currentImgCollection[randImageIndex];
      currentImgCollection.splice(randImageIndex, 1);
      return randImageRec;
    });
    return this._galleryImages;
  }

  constructor(
    galleryCount: number = 4,
    refreshInterval = 6000,
    { empty, images } = new ImageServiceCollection()
  ) {
    // заполняем стартовые значения полей
    this._refreshInterval = refreshInterval;
    this._imageEmpty = empty;
    this._imageCollection = images;
    this._viewerImage = this._imageEmpty;
    this._galleryImages = Array(galleryCount).fill(this._imageEmpty);

    // стартуем интервалы, генерируещие события обновления изображений
    this.restartGalleryIntervat();
    this.restartViewerIntervat();
  }
}
