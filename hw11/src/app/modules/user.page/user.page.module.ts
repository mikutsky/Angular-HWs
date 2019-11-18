import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
const childRouters: Routes = [{ path: "user", component: UserPageComponent }];

import { SearchService } from "src/app/services/search.service";
import { UserPageComponent } from "./user.page.component";

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule, RouterModule.forChild(childRouters)],
  exports: [RouterModule],
  providers: [SearchService]
})
export class UserPageModule {}
