import { Component } from "@angular/core";

@Component({
  selector: "task-text-component",
  template: `
    <div>
      <h4>Написать две кастомные пайпы:</h4>
      <ul>
        <li>
          Первая пайпа будет переводить символы строки в символы
          <a
            href="https://ru.wikipedia.org/wiki/%D0%90%D0%B7%D0%B1%D1%83%D0%BA%D0%B0_%D0%9C%D0%BE%D1%80%D0%B7%D0%B5"
          >
            азбуки морзе
          </a>
          . Не печатные символы игнорировать.
        </li>
        <li>
          Вторая пайпа, которая будет переводить точки и тире в печатные
          символы.
        </li>
      </ul>
    </div>
  `
})
export class TaskTextComponent {}
