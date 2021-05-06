import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { environment } from "src/environments/environment";
import { CreateSekerComponent } from "../create-seker/create-seker.component";
import { Skarim } from "../models/skarim.model";
import { Users } from "../models/user.model";
import { SkarimService } from "../skarim.service";

@Component({
  selector: "app-all-skarim",
  templateUrl: "./all-skarim.component.html",
  styleUrls: ["./all-skarim.component.css"],
})
export class AllSkarimComponent implements OnInit {
  skarim: Skarim[] = [];
  baseUrl = environment.apiUrl + "/images/";
  userId: number;
  constructor(private sekerService: SkarimService, public dialog: MatDialog) {}

  ngOnInit() {
   var user =  <Users>(JSON.parse( localStorage.getItem("user")));
   this.userId = user.kod_user;
   this.getSkarim();
   
  }
  getSkarim(){
    this.sekerService.getSkarimByUserId(  this.userId).subscribe((x) => {
      this.skarim = x;
   
    });

  }
  openDialog(sekerId?: number) {
    const dialogRef = this.dialog.open(CreateSekerComponent, {
      data: { sekerId },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getSkarim();
    });
  }
}
