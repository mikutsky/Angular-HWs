import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Homework №{{ hwNumber }}</h1>
    <task-text></task-text>
  `
})
export class AppContainer {
  hwNumber: number = 7;
}
