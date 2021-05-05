import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skarim',
  templateUrl: './skarim.component.html',
  styleUrls: ['./skarim.component.css']
})
export class SkarimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  headers = ["-   מספר סקר    -",
   "-    שם ולוגו   - ",
    "-    תאריך התחלה   -", 
    "-   תאריך סיום   -"
    ];

}
