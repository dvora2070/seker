import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AskedService } from "../asked.service";
import { Asked } from "../models/asked.model";
import { SetAskedComponent } from "../set-asked/set-asked.component";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.css"],
})
export class AllUsersComponent implements OnInit {
  asked: Asked[] = [];
  constructor(private askedService: AskedService, public dialog: MatDialog) {}

  getAllAsked() {
    this.askedService.getAllAsked().subscribe((x) => {
      this.asked = x;
    });
  }
  ngOnInit() {this.getAllAsked();}
 

  openDialog(askedId?: number) {
    const dialogRef = this.dialog.open(SetAskedComponent, {
      data: { askedId },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getAllAsked();
    });
  }


}
