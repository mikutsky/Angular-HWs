import { Component } from "@angular/core";

@Component({
  selector: "task-text",
  template: `
    <div>
      <h4>Написать тесты для компонентов модуля галерея. Проверять:</h4>
      <ul>
        <li>
          рендеринг компонентов
        </li>
        <li>
          правильный выбор картинок
        </li>
        <li>
          переключение активного изображения.
        </li>
      </ul>
    </div>
  `
})
export class TaskTextComponent {}
