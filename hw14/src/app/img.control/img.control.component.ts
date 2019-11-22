import { Component } from "@angular/core";

@Component({
  selector: "img-control",
  template: `
    <div class="img-control">
      <img-viewer></img-viewer>
      <img-gallery></img-gallery>
    </div>
  `,
  styleUrls: ["./img.control.component.css"]
})
export class ImgControlComponent {
  constructor() {}
}
