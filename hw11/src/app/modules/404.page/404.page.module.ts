import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const childRouters: Routes = [{ path: "**", component: NoPageComponent }];

import { NoPageComponent } from "./404.page.component";

@NgModule({
  declarations: [NoPageComponent],
  imports: [RouterModule.forChild(childRouters)],
  exports: [RouterModule],
  providers: []
})
export class NoPageModule {}
