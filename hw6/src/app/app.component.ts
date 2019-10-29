import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Homework №{{ hwNumber }}</h1>
    <task-text></task-text>
    <img-control></img-control>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public hwNumber: number = 6;
}
