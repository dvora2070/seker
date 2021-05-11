import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { environment } from "src/environments/environment";
import { CreateSekerComponent } from "../create-seker/create-seker.component";
import { Skarim } from "../models/skarim.model";
import { Users } from "../models/user.model";
import { SkarimService } from "../skarim.service";
import { Questions } from "../models/questions.model";
@Component({
  selector: "app-seker-results",
  templateUrl: "./seker-results.component.html",
  styleUrls: ["./seker-results.component.css"],
})
export class SekerResultsComponent implements OnInit {
  skarim: Skarim[] = [];
  baseUrl = environment.apiUrl + "/images/";
  userId: number;
  questions: Questions[] = [];
  sekerId: number;
  constructor(private sekerService: SkarimService, public dialog: MatDialog) {}

  ngOnInit() {
    var user = <Users>JSON.parse(localStorage.getItem("user"));
    this.userId = user.kod_user;
    this.getSkarim();
  }
  getSkarim() {
    this.sekerService.getSkarimByUserId(this.userId).subscribe((x) => {
      this.skarim = x;
      if (this.skarim && this.skarim.length > 0) {
        this.sekerId = this.skarim[0].kod_skr;
        this.getQuestionBySekerId(this.sekerId);
      }
    });
  }
  getQuestionBySekerId(id) {
    this.sekerService.getQuestionsBySekerIdWithAns(this.sekerId).subscribe((x) => {
      this.questions = x;
      if (this.questions && this.questions.length > 0) {
      }
    });
  }

  changeSeker(id) {
    this.getQuestionBySekerId(id);
  }
}
