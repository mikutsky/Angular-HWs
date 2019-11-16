import { Component } from "@angular/core";

@Component({
  selector: "no-page",
  template: `
    <h1>404</h1>
    <h4>Page not found</h4>
  `,
  styles: [
    `
      :host {
        display: block;
        text-align: center;
        padding: 208px;
      }
    `
  ]
})
export class NoPageComponent {}
