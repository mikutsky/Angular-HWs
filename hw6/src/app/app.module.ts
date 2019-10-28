import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Добавил модуль для бандинга
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TaskTextComponent } from "./task.text.component/task.text.component";
import { ImgViewerComponent } from "./img.viewer.component/img.viewer.component";
import { ImgGalleryComponent } from "./img.gallery.component/img.gallery.component";
import { ImgControlComponent } from "./img.control.component/img.control.component";

import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    TaskTextComponent,
    ImgViewerComponent,
    ImgGalleryComponent,
    ImgControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Добавил модуль для бандинга
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
