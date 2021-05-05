import { Component, OnInit, Input } from '@angular/core';
import { ColorSekerService } from '../../Services/color-seker.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 

  constructor(private colorSeker:ColorSekerService) { }

  ngOnInit() {
  document.fgColor=this.colorSeker.fcolor;
  if(this.colorSeker.url1 !=" "){
    //document.bgColor=this.colorSeker.url1;
   }
  else{
    document.bgColor=this.colorSeker.gcolor;
   }
  }
  
}
