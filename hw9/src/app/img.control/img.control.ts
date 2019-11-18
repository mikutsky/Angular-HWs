import { Component } from "@angular/core";

import store from "../redux/store";
import Actions from "../redux/actions";

@Component({
  selector: "img-control",
  template: `
    <div class="img-control">
      <img-viewer></img-viewer>
      <img-gallery></img-gallery>
    </div>
  `,
  styleUrls: ["./img.control.css"]
})
export class ImgControlComponent {
  constructor() {}
}
