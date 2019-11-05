import { Component } from "@angular/core";

@Component({
  selector: "task-text",
  template: `
    <div>
      <h4>Создать три компонента:</h4>
      <ul>
        <li>
          Галерея - использовать редакс, в сторе хранить выбраное
          изображение.<br />
          В главной картинке показывать его. Прокидывать изображение с помощью
          input - запрещено.
        </li>
      </ul>
    </div>
  `
})
export class TaskTextComponent {}
