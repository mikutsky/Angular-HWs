import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TaskTextComponent } from "./task.text.component/task.text.component";
import { TextTransformComponent } from "./text.transform.component/text.transform.component";

import { MorseEncodePipe } from "./morse.code.pipe/morse.encode.pipe";
import { MorseDecodePipe } from "./morse.code.pipe/morse.decode.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TaskTextComponent,
    TextTransformComponent,
    MorseEncodePipe,
    MorseDecodePipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
