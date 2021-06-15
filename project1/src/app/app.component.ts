import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  userLogin = false;
  constructor(private userService: UserService) {
    this.userService.loginUser.subscribe((x) => {
      this.userLogin = true;
    });
  }
  ngOnInit() {
    var userLogin = localStorage.getItem("user");
    if (userLogin !== null) {
      this.userLogin = true;
    }
  }
}
