import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
