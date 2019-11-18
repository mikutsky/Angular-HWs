import { Component } from "@angular/core";

@Component({
  selector: "login-page",
  templateUrl: "./login.page.component.html",
  styleUrls: ["./login.page.component.css"]
})
export class LoginPageComponent {
  public password: string;

  public onLogin(): void {
    console.log("тут происходит авторизация");
  }
}
