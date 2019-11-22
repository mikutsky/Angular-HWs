import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskTextComponent } from "./task.text/task.text.component";
import { ImgControlComponent } from "./img.control/img.control.component";
import { ImgGalleryComponent } from "./img.gallery/img.gallery.component";
import { ImgViewerComponent } from "./img.viewer/img.viewer.component";

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
