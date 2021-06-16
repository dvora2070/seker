import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  userLogin = false;
  constructor(private userService: UserService,
    private route:Router) {
    this.userService.loginUser.subscribe((x) => {
      this.userLogin = true;
    });
  }
  ngOnInit() {
    var userLogin = JSON.parse(  localStorage.getItem("user"));
    if (userLogin !== null) {
      this.userLogin = true;
    }
    // else{
    //   this.route.navigateByUrl("/login");
    // }
  }

  logout(){
    localStorage.setItem("user", null);
    this.userLogin = false;
    this.route.navigateByUrl("/login");
  }
}
