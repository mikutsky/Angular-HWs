import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Homework №{{ hwNumber }}</h1>
    <task-text-component></task-text-component>

    <div class="container">
      <text-transform></text-transform>
    </div>
  `
})
export class AppComponent {
  public hwNumber: number = 8;
}
