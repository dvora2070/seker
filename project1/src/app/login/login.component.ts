import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

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
        Swal.fire('Ooops',"המשתמש לא קיים",'error');
      } else {


        localStorage.setItem("user", JSON.stringify(x));

        this.userService.loginUser.next();
        this.route.navigateByUrl("/skarim");
      }
    });
  }
}
