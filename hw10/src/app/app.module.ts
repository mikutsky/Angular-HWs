import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { CoutryService } from "./services/country.service";

import { AppComponent } from "./app.component";
import { TaskTextComponent } from "./task.text/task.text";
import { DataViewerComponent } from "./data.viewer/data.viewer";

@NgModule({
  declarations: [AppComponent, TaskTextComponent, DataViewerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CoutryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
