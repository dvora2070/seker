import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { environment } from "src/environments/environment";
import { ColorSekerService } from "../color-seker.service";
import { Skarim } from "../models/skarim.model";
import { Users } from "../models/user.model";
import { SkarimService } from "../skarim.service";

@Component({
  selector: "app-create-seker",
  templateUrl: "./create-seker.component.html",
  styleUrls: ["./create-seker.component.css"],
})
export class CreateSekerComponent implements OnInit {
  seker = new Skarim();
  url: string | ArrayBuffer;
  file: File;
  userId: number;
  serviceBase = environment.apiUrl + "/images/";
  //seker = new Skarim() = {logo_skr:'111',name_skr:'Seker 111'};
  constructor(
    public colorSeker: ColorSekerService,
    private sekerService: SkarimService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateSekerComponent>
  ) {}

  ngOnInit() {
    var user = <Users>JSON.parse(localStorage.getItem("user"));
    this.userId = user.kod_user;
    if (this.data && this.data.sekerId) {
      this.sekerService.getSkarimById(+this.data.sekerId).subscribe((x) => {
        this.seker = x;
      });
    } else {
      this.seker.bgcolor_skr = "#ffffff";
      this.seker.fountcolor_skr = "#000000";
    }
  }

  onSelectFile(e) {
    if (e.target.files && e.target.files[0]) {
      this.file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        this.url = (e.target as FileReader).result;
      };
    }
  }
  addSeker() {
    this.seker.kod_user = this.userId;
    if (this.seker.kod_skr && this.seker.kod_skr !== 0) {
      this.sekerService.updateSeker(this.seker).subscribe((x) => {
        if (this.file) {
          this.sekerService.uploadImage(x, this.file).subscribe(
            (data) => {
              this.close();
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          this.close();
        }
      });
    } else {
      this.sekerService.addSeker(this.seker).subscribe((x) => {
        if (this.file) {
          this.sekerService.uploadImage(x, this.file).subscribe(
            (data) => {
              this.close();
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          this.close();
        }
      });
    }
  }

  close() {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close({ data: "Order" });
    }
  }
}
