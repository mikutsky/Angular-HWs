import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Homework №{{ hwNumber }}</h1>
    <task-text-component></task-text-component>
    <img-control-component></img-control-component>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public hwNumber: number = 6;
}

