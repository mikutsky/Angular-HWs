import { IImageRec } from "../interfaces/intrfaces";

export class ImageServiceCollection {
  public empty: IImageRec;
  public images: IImageRec[];
  
  constructor() {
    this.empty = { src: "/assets/img.service/photo.empty.jpg", alt: "", title: "" };
    this.images = [
      { src: "/assets/img.service/photo-01.jpg", alt: "Photo preview - 01", title: "Title - 01" },
      { src: "/assets/img.service/photo-02.jpg", alt: "Photo preview - 02", title: "Title - 02" },
      { src: "/assets/img.service/photo-03.jpg", alt: "Photo preview - 03", title: "Title - 03" },
      { src: "/assets/img.service/photo-04.jpg", alt: "Photo preview - 04", title: "Title - 04" },
      { src: "/assets/img.service/photo-05.jpg", alt: "Photo preview - 05", title: "Title - 05" },
      { src: "/assets/img.service/photo-06.jpg", alt: "Photo preview - 06", title: "Title - 06" },
      { src: "/assets/img.service/photo-07.jpg", alt: "Photo preview - 07", title: "Title - 07" },
      { src: "/assets/img.service/photo-08.jpg", alt: "Photo preview - 08", title: "Title - 08" },
      { src: "/assets/img.service/photo-09.jpg", alt: "Photo preview - 09", title: "Title - 09" },
      { src: "/assets/img.service/photo-10.jpg", alt: "Photo preview - 10", title: "Title - 10" },
      { src: "/assets/img.service/photo-11.jpg", alt: "Photo preview - 11", title: "Title - 11" },
      { src: "/assets/img.service/photo-12.jpg", alt: "Photo preview - 12", title: "Title - 12" },
      { src: "/assets/img.service/photo-13.jpg", alt: "Photo preview - 13", title: "Title - 13" },
      { src: "/assets/img.service/photo-14.jpg", alt: "Photo preview - 14", title: "Title - 14" },
      { src: "/assets/img.service/photo-15.jpg", alt: "Photo preview - 15", title: "Title - 15" },
      { src: "/assets/img.service/photo-16.jpg", alt: "Photo preview - 16", title: "Title - 16" },
      { src: "/assets/img.service/photo-17.jpg", alt: "Photo preview - 17", title: "Title - 17" },
      { src: "/assets/img.service/photo-18.jpg", alt: "Photo preview - 18", title: "Title - 18" },
      { src: "/assets/img.service/photo-19.jpg", alt: "Photo preview - 19", title: "Title - 19" },
      { src: "/assets/img.service/photo-20.jpg", alt: "Photo preview - 20", title: "Title - 20" },
      { src: "/assets/img.service/photo-21.jpg", alt: "Photo preview - 21", title: "Title - 21" },
      { src: "/assets/img.service/photo-22.jpg", alt: "Photo preview - 22", title: "Title - 22" },
      { src: "/assets/img.service/photo-23.jpg", alt: "Photo preview - 23", title: "Title - 23" },
      { src: "/assets/img.service/photo-24.jpg", alt: "Photo preview - 24", title: "Title - 24" },
      { src: "/assets/img.service/photo-25.jpg", alt: "Photo preview - 25", title: "Title - 25" },
      { src: "/assets/img.service/photo-26.jpg", alt: "Photo preview - 26", title: "Title - 26" }
    ];
  }
}
