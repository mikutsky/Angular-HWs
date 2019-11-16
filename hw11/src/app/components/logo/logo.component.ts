import { Component } from "@angular/core";

// структура логотипа
interface ILogo {
  src: string;
  title: string;
  href: string;
}

@Component({
  selector: "logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"]
})
export class LogoComponent {
  public logo: ILogo;

  constructor() {
    this.logo = {
      src: "./assets/logo.png",
      title: "SCOPE",
      href: "/"
    };
  }
}
