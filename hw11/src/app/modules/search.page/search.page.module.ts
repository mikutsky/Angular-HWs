import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
const childRouters: Routes = [
  { path: "search", component: SearchPageComponent }
];

import { SearchService } from "src/app/services/search.service";
import { SearchPageComponent } from "./search.page.component";

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(childRouters)],
  exports: [RouterModule],
  providers: [SearchService]
})
export class SearchPageModule {}
