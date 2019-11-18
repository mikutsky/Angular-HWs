import { Component } from "@angular/core";

interface IToolButton {
  src: string;
  alt: string;
}

@Component({
  selector: "tool-bar",
  templateUrl: "./tool.bar.component.html",
  styleUrls: ["./tool.bar.component.css"]
})
export class ToolBarComponent {
  public toolButtoms: Array<IToolButton>;

  constructor() {
    this.toolButtoms = [
      { src: "assets/btn-setting.png", alt: "Settings" },
      { src: "assets/btn-notice.png", alt: "Notices" },
      { src: "assets/btn-mail.png", alt: "Mails" },
      { src: "assets/btn-heart.png", alt: "Tools" }
    ];
  }
}
