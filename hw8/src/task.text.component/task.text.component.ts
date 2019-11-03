import { Component } from "@angular/core";

@Component({
  selector: "task-text-component",
  template: `
    <div>
      <h4>Создать три компонента:</h4>
      <ul>
        <li>
          Первый картинка галереи(содержит картинку в большом разрешении).
          Картинку взять как ассет.
        </li>
        <li>
          Галерея картинок - 4 маленьких картинки.
        </li>
        <li>
          Контейнер - содержит первых два компонента. При клике на маленькую
          картинку она должна становиться большой.
        </li>
      </ul>
    </div>
  `
})
export class TaskTextComponent {}
