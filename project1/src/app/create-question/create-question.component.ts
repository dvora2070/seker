import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Questions } from "../models/questions.model";
import { TypeAnswers } from "../models/typeAnswers.model";
import { SkarimService } from "../skarim.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-create-question",
  templateUrl: "./create-question.component.html",
  styleUrls: ["./create-question.component.css"],
})
export class CreateQuestionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sekerService: SkarimService
  ) {}
  sekerId: number;
  questions: Questions[] = [];
  quest: Questions;
  types: TypeAnswers[] = [];
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sekerId = +params["id"];
      this.getQuestionBySekerId();
    });
    this.sekerService.getTypesAnswers().subscribe((x) => {
      this.types = x;
    });
  }

  getQuestionBySekerId() {
    this.sekerService.getQuestionsBySekerId(this.sekerId).subscribe((x) => {
      this.questions = x;
      if (this.questions && this.questions.length > 0) {
        if (!this.quest) {
          this.quest = this.questions[0];
        }
      }
    });
  }
  selectQuestion(numQ: number) {
    this.quest = this.questions.filter((x) => x.num_quest === numQ)[0];
  }
  addQuestion() {
    var num = 1;
    if (this.questions.length > 0) {
      num = this.questions.length + 1;
    }
    this.questions.push({
      kod_skr: this.sekerId,
      ismust_quest: true,
      text_quest: "",
      num_quest: num,
      type_ans: 1,
      kod_quest: 0,
      AnsOfQuest: [],
    });
    this.quest = this.questions[this.questions.length - 1];
  }

  addAnswer() {
    if (!this.quest.AnsOfQuest) {
      this.quest.AnsOfQuest = [];
    }
    this.quest.AnsOfQuest.push({
      kod_ans: 0,
      kod_quest: this.quest.kod_quest,
      text_ans: "",
    });
  }
  removeAns(ans) {
    const index: number = this.quest.AnsOfQuest.indexOf(ans);
    if (index !== -1) {
      this.quest.AnsOfQuest.splice(index, 1);
    }
  }
  saveQuestions() {
    this.sekerService.saveQuestions(this.questions).subscribe((x) => {
      Swal.fire('','השמירה בוצעה בהצלחה!','success');
      this.getQuestionBySekerId();
    });
  }

  changeAnswerType(typeId) {
    this.quest.AnsOfQuest = [];
  }
}
