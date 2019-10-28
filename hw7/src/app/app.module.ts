import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppContainer } from "./app.container";
import { TaskText } from "./task.text/task.text";

@NgModule({
  declarations: [AppContainer, TaskText],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {}
