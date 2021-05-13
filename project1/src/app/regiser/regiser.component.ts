import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css']
})
export class RegiserComponent implements OnInit {

  constructor(private userService: UserService,private route : Router) { }
  newUser = new Users();

  users: Users[] = [];
  ngOnInit() {
 
  }
  OnRegister() {
    this.userService.register(this.newUser).subscribe(x => {
      console.log(x);
      localStorage.setItem("user", JSON.stringify(x));

      this.userService.loginUser.next();
      this.route.navigateByUrl("/skarim");

    });
  }
  // getAllUsers() {
  //   this.userService.getAllUsers().subscribe(xx => {
  //     this.users = xx;
  //   });
  // }
}
