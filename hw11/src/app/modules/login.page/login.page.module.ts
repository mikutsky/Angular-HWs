import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const childRouters: Routes = [{ path: "login", component: LoginPageComponent }];

import { LoginPageComponent } from "./login.page.component";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forChild(childRouters)],
  exports: [RouterModule],
  providers: []
})
export class LoginPageModule {}
