import { Component } from "@angular/core";

// структура записи ссылки в футоре
interface IReferenceRec {
  link: string;
  href: string;
}

// структура записи колонки ссылок в футоре
interface IReferenceСolumn {
  title: string;
  references: Array<IReferenceRec>;
}

// структура подписи в футоре
interface ISubscribe {
  rights: string;
  developers: string;
  href: string;
}

@Component({
  selector: "app-footer",
  templateUrl: "./app.footer.component.html",
  styleUrls: ["./app.footer.component.css"]
})
export class AppFooterComponent {
  public referenceColumns: Array<IReferenceСolumn>;
  public subscribe: ISubscribe;

  constructor() {
    this.subscribe = {
      rights: "© 2019, Odessa. All Rights Reserved.",
      developers: "Website Designed & Developed By: MidKon",
      href: "/"
    };
    this.referenceColumns = [
      {
        title: "We are scope",
        references: [
          { link: "About us", href: "/" },
          { link: "Help", href: "/" },
          { link: "Contact", href: "/" }
        ]
      },
      {
        title: "For users",
        references: [
          { link: "Scope Awards", href: "/" },
          { link: "Terms and Conditions", href: "/" },
          { link: "Privacy", href: "/" }
        ]
      }
    ];
  }
}
