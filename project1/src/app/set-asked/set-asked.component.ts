import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AskedService } from "../asked.service";
import { Asked } from "../models/asked.model";

@Component({
  selector: "app-set-asked",
  templateUrl: "./set-asked.component.html",
  styleUrls: ["./set-asked.component.css"],
})
export class SetAskedComponent implements OnInit {
  asked = new Asked();

  constructor(
    private askedService: AskedService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SetAskedComponent>
  ) {}

  ngOnInit() {
    if (this.data && this.data.askedId) {
      this.askedService.getAskedById(+this.data.askedId).subscribe((x) => {
        this.asked = x;
      });
    }
  }

  saveAsked() {
    if (this.asked.kod_asked && this.asked.kod_asked !== 0) {
      this.askedService.updateAsked(this.asked).subscribe((x) => {
        this.close();
      });
    } else {
      this.askedService.addAsked(this.asked).subscribe((x) => {
        this.close();
      });
    }
  }

  close() {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close({ data: "Order" });
    }
  }
}
