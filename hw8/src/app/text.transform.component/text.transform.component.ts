import { Component } from "@angular/core";

@Component({
  selector: "text-transform",
  template: `
    <div class="text-transform-container">
      <h2 class="text-transform-title">ENCODER...</h2>
      <label>
        Input text: <br />
        <input
          class="text-transform-input"
          type="text"
          [(ngModel)]="inputText"
        />
      </label>
      <p>
        Result: <br />
        <span class="text-transform-result">{{
          inputText | toMorseEncode
        }}</span>
      </p>
    </div>

    <div class="text-transform-container">
      <h2 class="text-transform-title">DECODER...</h2>
      <label>
        Input code (use "-", "." and " " as a separation): <br />
        <input
          class="text-transform-input"
          type="text"
          [(ngModel)]="inputCode"
        />
      </label>
      <p>
        Result: <br />
        <span class="text-transform-result">{{
          inputCode | toMorseDecode
        }}</span>
      </p>
    </div>
  `,
  styleUrls: ["./text.transform.component.css"]
})
export class TextTransformComponent {
  public inputText = "This is text in Morse code...";
  public inputCode =
    "- .... .. ... .. ... - . -..- - .. -. -- --- .-. ... . -.-. --- -.. .";
}
