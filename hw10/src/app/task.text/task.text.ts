import { Component } from "@angular/core";

@Component({
  selector: "task-text",
  template: `
    <div>
      <h4>Написать свой сервис, который:</h4>
      <ul>
        <li>
          будет возвращать в компонент данные по странам - Название страны,
          альфа код, телефонный код, картинка флага, столица
        </li>
        <li>
          должен быть инжектирован с помощью DI
        </li>
        <li>https://restcountries.eu/rest/v2/name/netherlands</li>
      </ul>
    </div>
  `
})
export class TaskTextComponent {}
