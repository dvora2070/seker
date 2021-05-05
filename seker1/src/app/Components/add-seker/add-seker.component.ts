import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-seker',
  templateUrl: './add-seker.component.html',
  styleUrls: ['./add-seker.component.css']
})
export class AddSekerComponent implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {
  }
save(){
  alert("האם אתה בטוח שברצונך לסיים להגדיר את הסקר ולשמור אותו במאגר הסקרים שלך?");
  this.router.navigate(["/end"]);
alert("very good!");
}
}
