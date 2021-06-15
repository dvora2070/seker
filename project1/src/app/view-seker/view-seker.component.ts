import { Component, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { AnsOfAsked } from "../models/ansOFasked.model";
import { Asked } from "../models/asked.model";
import { Questions } from "../models/questions.model";
import { Skarim } from "../models/skarim.model";
import { SkarimService } from "../skarim.service";

@Component({
  selector: "app-view-seker",
  templateUrl: "./view-seker.component.html",
  styleUrls: ["./view-seker.component.css"],
})
export class ViewSekerComponent implements OnInit {
  seker = new Skarim();
  baseUrl = environment.apiUrl + "/images/";
  askedId: number;
  questions: Questions[] = [];
  sekerId: number;
  quest: Questions;
  asked = new Asked();
  ansOfAsked: AnsOfAsked[];
  notRelevantSeker = false;
  pageIndex = 0;
  constructor(
    private sekerService: SkarimService,
    private route: ActivatedRoute, private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sekerId = +params["id"];
      this.askedId = +params["askedId"];

      this.getQuestionBySekerAndAskedId();
    });
  }
  getQuestionBySekerAndAskedId() {
    this.sekerService.getAskedById(this.askedId).subscribe((x) => {
      this.asked = x;
    });

    this.sekerService.getSkarimById(this.sekerId).subscribe((x) => {
      this.seker = x;
      if (
        new Date(this.seker.startdate_skr) > new Date() ||
        new Date(this.seker.lastdate_skr) < new Date()
      )
        this.notRelevantSeker = true;
    });
    this.sekerService.getQuestionsBySekerId(this.sekerId).subscribe((x) => {
      this.questions = x;
      if (this.questions && this.questions.length > 0) {
        this.sekerService
          .getQuestionBySekerAndAskedId(this.sekerId, this.askedId)
          .subscribe((x) => {
            if (!this.quest) {
              this.quest = this.questions[0];
            }
            this.ansOfAsked = x;
            this.questions.forEach((x) => {
              x.AnsOfAsked = [];
              var ans = this.ansOfAsked.filter(
                (y) => y.kod_quest === x.kod_quest
              );
              if (ans && ans.length > 0) {
                x.AnsOfAsked.push(ans[0]);
              } else {
              }
              x.AnsOfAsked.push({
                kod_quest: x.kod_quest,
                kod_asked: this.askedId,
                answer: null,
                kod_ans: null,
              });
            });
          });
      }
    });
  }

  prevAns() {
    this.ngZone.run(() => {

      this.quest = null;
      this.pageIndex--;
      this.quest = this.questions[this.pageIndex];
    })

  }
  nextAns() {
    this.ngZone.run(() => {
      this.quest = null;
      this.pageIndex++;
      this.quest = this.questions[this.pageIndex];
    })
  }
  saveSekerAskedId() {
    var ans = [];
    this.questions.forEach((x) => {
      var ansOdAsked = x.AnsOfAsked[0];
      if (
        (ansOdAsked.answer && ansOdAsked.answer != "") ||
        (ansOdAsked.kod_ans && ansOdAsked.kod_ans != 0)
      ) {
        ans.push(x.AnsOfAsked[0]);
      }
    });
    this.sekerService.saveSekerAns(ans).subscribe((x) => {
      Swal.fire("", "הסקר נשלח בהצלחה!", "success");
    });
  }
}
