import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
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
  todaysdate = new Date();
  
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
      this.seker.startdate_skr = new Date();
      this.seker.lastdate_skr =  new Date( new Date().getTime() + (1000 * 60 * 60 * 24 * 10));
    
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
  //הוספת סקר
  addSeker() {
    this.seker.kod_user = this.userId;
    // אם הסקר קיים - עדכון
    if (this.seker.kod_skr && this.seker.kod_skr !== 0) {
      this.sekerService.updateSeker(this.seker).subscribe((x) => {
        if (this.file) {
          this.sekerService.uploadImage(x.kod_skr, this.file).subscribe(
            (data) => {
              Swal.fire("", "השמירה בוצעה בהצלחה!", "success");
              this.close();
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          Swal.fire("", "השמירה בוצעה בהצלחה!", "success");
          this.close();
        }
      });
      // אחרת יצירה חדשה
    } else {
      this.sekerService.addSeker(this.seker).subscribe((x) => {
        if (this.file) {
          this.sekerService.uploadImage(x.kod_skr, this.file).subscribe(
            (data) => {
              Swal.fire("", "השמירה בוצעה בהצלחה!", "success");
              this.close();
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          Swal.fire("", "השמירה בוצעה בהצלחה!", "success");
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
