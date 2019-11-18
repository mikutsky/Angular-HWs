import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
const childRouters: Routes = [{ path: "gallery", component: GalleryComponent }];

import { GalleryComponent } from "./gallery.component";
import { GalleryPreviewComponent } from "./components/preview.component/preview.component";
import { GalleryViewComponent } from "./components/view.component/view.component";

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryPreviewComponent,
    GalleryViewComponent
  ],
  imports: [CommonModule, RouterModule.forChild(childRouters)],
  exports: [RouterModule],
  providers: []
})
export class GalleryModule {}
