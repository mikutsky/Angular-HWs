import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Добавил модуль для бандинга
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TaskText } from "./task.text/task.text";
import { ImgViewer } from "./img.viewer/img.viewer";
import { ImgGallery } from "./img.gallery/img.gallery";
import { ImgControl } from "./img.control/img.control";

import { from } from "rxjs";

@NgModule({
  declarations: [AppComponent, TaskText, ImgViewer, ImgGallery, ImgControl],
  imports: [
    BrowserModule,
    FormsModule // Добавил модуль для бандинга
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
