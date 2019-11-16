import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const childRouters: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent }
];

import { HomePageComponent } from "./home.page.component";

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule.forChild(childRouters)],
  exports: [RouterModule],
  providers: []
})
export class HomePageModule {}
