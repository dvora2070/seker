import { Component, OnInit } from '@angular/core';
import { SekerService } from '../../Services/seker.service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-regiser',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(public sekerService:SekerService) { }
  user:string=null;
  password:string=null
  password2:string=null;
  mail:string=null;
  OnRegiste()
  {
  if(this.user&&this.mail&&this.password&&this.password2)
   { if(this.password!=this.password2)
      alert("הססמא שונה!");
    else
      alert("ברוך הבא ל:"+this.user+"\n מייל:"+this.mail+"\n ססמתך:"+this.password);
   }
   else
   alert("חובה למלא שם,מייל,ססמא ואישור לססמא!");
   
    // this.sekerService.addUser(this.user,this.password,this.password2, this.mail).subscribe(data=>{
    //   /////
    //     if(data==true)
    //     {
          
    //           // התנתבות למסך אחר
    //     }

    //   ////
    //   });
   
  }
  ngOnInit(): void {
  }

}
