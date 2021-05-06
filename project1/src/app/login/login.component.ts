import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {}
  login() {
    this.userService.login(this.userName, this.password).subscribe((x) => {
      if (!x) {
        alert("המשתמש לא קיים");
      } else {
        localStorage.setItem("user", JSON.stringify(x));

        this.userService.loginUser.next();
        this.route.navigateByUrl("/skarim");
      }
    });
  }
}
