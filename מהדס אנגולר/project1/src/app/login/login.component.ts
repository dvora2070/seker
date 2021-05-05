import { Component, OnInit } from '@angular/core';
import { SekerService } from '../seker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sekerService:SekerService) { }
  user:string;
  password:string;
  ngOnInit() {
  }
  OnLogIn()
  {
    alert(this.user+" "+this.password);
     this.sekerService.isExistUser(this.user,this.password).subscribe(data=>{
     if (data==true)
    {
       alert("משתמש קיים");
     }
   
     else
     {
       alert("משתמש לא קיים")
     } 
    })
  }
}
