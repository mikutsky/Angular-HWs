import { Component, OnInit } from "@angular/core";

import store from "../redux/store";
import Actions from "../redux/actions";

const { REFRESH_ALL } = Actions;

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
export class ImgControlComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    store.dispatch({ type: REFRESH_ALL });
    store.getState().resetIntervalNext(store);
  }
}
