import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ title }}</h1>
    <task-text></task-text>
    <img-control></img-control>
  `
})
export class AppComponent {
  title = "Homework №14";
}
