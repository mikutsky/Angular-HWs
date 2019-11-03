import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppContainer } from "./app.container";
import { TaskTextComponent } from "./task.text.component/task.text.component";
import { ImgViewerComponent } from "./img.viewer.component/img.viewer.component";
import { ImgGalleryComponent } from "./img.gallery.component/img.gallery.component";
import { ImgControlComponent } from "./img.control.component/img.control.component";

import { ImageService } from "./services/image.service";

@NgModule({
  declarations: [
    AppContainer,
    TaskTextComponent,
    ImgViewerComponent,
    ImgGalleryComponent,
    ImgControlComponent
  ],
  imports: [BrowserModule],
  providers: [ImageService],
  bootstrap: [AppContainer]
})
export class AppModule {}
