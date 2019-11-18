import { Component } from "@angular/core";

// структура логотипа
interface ILogo {
  src: string;
  title: string;
  href: string;
}

@Component({
  selector: "logo-small",
  templateUrl: "./logo.small.component.html",
  styleUrls: ["./logo.small.component.css"]
})
export class LogoSmallComponent {
  public logo: ILogo;

  constructor() {
    this.logo = {
      src: "./assets/logo.png",
      title: "SCOPE",
      href: "/"
    };
  }
}
