import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ title }}</h1>
    <task-text></task-text>
    <div class="container">
      <data-viewer></data-viewer>
    </div>
  `
})
export class AppComponent {
  title = "Homework №9";
}
