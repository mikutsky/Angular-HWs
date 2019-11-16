import { Component } from "@angular/core";

interface IPageHref {
  page: string;
  href: string;
}

@Component({
  selector: "app-developer-menu",
  templateUrl: "./app.developer.menu.html",
  styleUrls: ["./app.developer.menu.css"]
})
export class AppDeveloperMenuComponent {
  public pages: Array<IPageHref>;

  constructor() {
    this.pages = [
      { page: "Home", href: "" },
      { page: "Login", href: "login" },
      { page: "Search", href: "search" },
      { page: "Gallery", href: "gallery" }
    ];
  }
}
