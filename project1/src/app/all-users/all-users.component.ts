import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import Swal from "sweetalert2";
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
  public records: any[] = [];
  file: File;
  @ViewChild("csvReader", null) csvReader: any;

  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      this.file = files[0];
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
        if (this.records.length > 0) {
          this.askedService.uploadAsked(this.records).subscribe((x) => {
            this.fileReset();
            this.getAllAsked();
            Swal.fire("", "טעינת הרשומות בוצעה בהצלחה", "success");
          });
        }
      };

      reader.onerror = function () {
        console.log("error is occured while reading file!");
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(",");
      if (curruntRecord.length == headerLength) {
        let csvRecord: Asked = new Asked();
        csvRecord.email_asked = curruntRecord[0].trim();
        csvRecord.name_asked = curruntRecord[1].trim();
        csvRecord.phone_asked = curruntRecord[2].trim();

        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(",");
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }
  constructor(private askedService: AskedService, public dialog: MatDialog) {}

  getAllAsked() {
    this.askedService.getAllAsked().subscribe((x) => {
      this.asked = x;
    });
  }
  ngOnInit() {
    this.getAllAsked();
  }

  openDialog(askedId?: number) {
    const dialogRef = this.dialog.open(SetAskedComponent, {
      data: { askedId },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.getAllAsked();
    });
  }
}
