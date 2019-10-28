// import { EventEmitter } from "@angular/core";

const { random, floor } = Math;

export class ImageService {
  private _imagePathArr: string[];
  private _timeInterval: number = 6000;

  // public dataSource: EventEmitter<string> = new EventEmitter();

  public getNextImageURL(): string {
    const pathCount = this._imagePathArr.length;
    if (pathCount < 1) return "";
    const pathRand = floor(random() * pathCount);
    return this._imagePathArr[pathRand];
  }

  public generateNext(): string {
    return "";
  }

  constructor() {
    this._imagePathArr = [
      "./assets/img.viewer/photo-01.jpg",
      "./assets/img.viewer/photo-02.jpg",
      "./assets/img.viewer/photo-03.jpg"
    ];
  }
}
