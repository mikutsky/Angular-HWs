import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskTextComponent } from "./task.text/task.text";
import { ImgControlComponent } from "./img.control/img.control";
import { ImgGalleryComponent } from "./img.gallery/img.gallery";
import { ImgViewerComponent } from "./img.viewer/img.viewer";

@NgModule({
  declarations: [
    AppComponent,
    TaskTextComponent,
    ImgControlComponent,
    ImgGalleryComponent,
    ImgViewerComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
