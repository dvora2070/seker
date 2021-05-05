import { Component, OnInit } from '@angular/core';
import { ColorSekerService } from '../color-seker.service';
import { Skarim } from '../models/skarim.model';

@Component({
  selector: 'app-create-seker',
  templateUrl: './create-seker.component.html',
  styleUrls: ['./create-seker.component.css']
})
export class CreateSekerComponent implements OnInit {


  isDisabled: boolean = false;
  //seker = new Skarim() = {logo_skr:'111',name_skr:'Seker 111'};
  constructor(public colorSeker: ColorSekerService) { }

  ngOnInit() {
  }



  onSelectFile(e) {
    if (e.target.files && e.target.files[0]) {
      this.isDisabled = true;
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        this.colorSeker.url1 = (e.target as FileReader).result;

      }
    }
  }
  onSelectFile1(e2) {
    if (e2.target.files && e2.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e2.target.files[0]);
      reader.onload = (e2) => {
        this.colorSeker.url2 = (e2.target as FileReader).result;
      }
    }
  }
}
