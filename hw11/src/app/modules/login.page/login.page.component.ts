import { Component } from "@angular/core";

@Component({
  selector: "login-page",
  templateUrl: "./login.page.component.html",
  styleUrls: ["./login.page.component.css"]
})
export class LoginPageComponent {
  public onLogin(): void {
    console.log("тут будет логин");
  }
}
