import { Component, OnInit } from '@angular/core';
import { SekerService } from '../../Services/seker.service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sekerService:SekerService,private router:Router, private location:Location) { }
  user:string=null;
  mail:string=null;
  password:string=null;
  data:Boolean=false;
  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  OnLogIn()
  {
    if(this.user&&this.mail&&this.password)
       alert("ברוך הבא ל:"+this.user+"\n מייל:"+this.mail+"\n ססמתך:"+this.password);
    else
    alert("חובה למלא שם,מייל וסיסמא !");
   
    
  //   this.sekerService.isExistUser(this.user,this.mail,this.password).subscribe(data=>{
 if(this.user!=null)//לשנות ל-אם קיים
     { this.data=true;
       this.isdata();
     }
    }
  isdata()
   {  if (this.data==true)
    {
       alert("ברוך הבא!!");
       this.router.navigate(["/private"]);
     }
   
     else
     {
       alert("משתמש לא קיים")
       this.router.navigate(["/register"]);
      }  
    } 
  }
    // })
  
//}

