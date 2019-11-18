import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppDeveloperMenuComponent } from "./components/app.developer.menu/app.developer.menu";
import { AppHeaderComponent } from "./components/app.header/app.header.component";
import { AppFooterComponent } from "./components/app.footer/app.footer.component";
import { LogoComponent } from "./components/logo/logo.component";
import { LogoSmallComponent } from "./components/logo.small/logo.small.component";
import { ToolBarComponent } from "./components/tool.bar/tool.bar.component";
import { SearchBoxComponent } from "./components/search.box/search.box.component";

import { SearchService } from "./services/search.service";

import { SearchBoxDirective } from "./directives/search.box.directive";
import { ToolButtonDirective } from "./directives/tool.button.directive";

import { AppRoutingModule } from "./app.routing.module";
import { HomePageModule } from "./modules/home.page/home.page.module";
import { LoginPageModule } from "./modules/login.page/login.page.module";
import { SearchPageModule } from "./modules/search.page/search.page.module";
import { UserPageModule } from "./modules/user.page/user.page.module";
import { NoPageModule } from "./modules/404.page/404.page.module";

import { PaswordPipe } from "./pipes/password.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AppDeveloperMenuComponent,
    AppHeaderComponent,
    AppFooterComponent,

    LogoComponent,
    LogoSmallComponent,
    SearchBoxDirective,
    ToolBarComponent,
    SearchBoxComponent,
    PaswordPipe,

    ToolButtonDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HomePageModule,
    LoginPageModule,
    SearchPageModule,
    UserPageModule,
    NoPageModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
