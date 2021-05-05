import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skarim',
  templateUrl: './my-skarim.component.html',
  styleUrls: ['./my-skarim.component.css']
})
export class MySkarimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  headers = [" מספר סקר ", " שם  ", "תאריך התחלה ", " תאריך סיום", " לוגו "];

}
