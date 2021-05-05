import { Component, OnInit } from '@angular/core';
import { Skarim } from '../models/skarim.model';

@Component({
  selector: 'app-skarim',
  templateUrl: './skarim.component.html',
  styleUrls: ['./skarim.component.css']
})
export class SkarimComponent implements OnInit {
  
  skarim= [{ kod_skr:"14",jpg_skr:"1222"},{}];

   

  constructor() { }


  ngOnInit() {
  }

}
