import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-seker',
  templateUrl: './answer-seker.component.html',
  styleUrls: ['./answer-seker.component.css']
})
export class AnswerSekerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  headers = [" מספר סקר", "שם  ", "תאריך התחלה ", "תאריך סיום", "לוגו "];

}
