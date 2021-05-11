import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Questions } from "./models/questions.model";
import { Skarim } from "./models/skarim.model";
import { TypeAnswers } from "./models/typeAnswers.model";

@Injectable({
  providedIn: "root",
})
export class SkarimService {
  constructor(private http: HttpClient) {}
  URL = environment.apiUrl + "/api/skarim/";
  URLQuestions = environment.apiUrl + "/api/Questions/";
  URLTypeAnswers = environment.apiUrl + "/api/TypeAnswers/";

  getTypesAnswers() {
    return this.http.get<TypeAnswers[]>(this.URLTypeAnswers + "GetAllTypeAnswers");
  }

  getSkarimByUserId(userId: number) {
    return this.http.get<Skarim[]>(this.URL + "GetSkarimByUserId/" + userId);
  }
  getSkarimById(id: number) {
    return this.http.get<Skarim>(this.URL + "GetSkarimById/" + id);
  }

  addSeker(seker: Skarim) {
    return this.http.post<Skarim>(this.URL + "AddSeker", seker);
  }

  updateSeker(seker: Skarim) {
    return this.http.post<Skarim>(this.URL + "UpdateSeker", seker);
  }
  uploadImage(sekerId, image) {
    let formData: FormData = new FormData();
    formData.append("Image", image);
    formData.append("SekerId", sekerId);
    return this.http.post(`${this.URL}UploadImage`, formData);
  }

  getQuestionsBySekerId(sekerId: number) {
    return this.http.get<Questions[]>(
      this.URLQuestions + "getQuestionsBySekerId/" + sekerId
    );
  }
  getQuestionsBySekerIdWithAns(sekerId: number) {
    return this.http.get<Questions[]>(
      this.URLQuestions + "getQuestionsBySekerIdWithAns/" + sekerId
    );
  }
  


  getQuestionById(id: number) {
    return this.http.get<Questions>(
      this.URLQuestions + "getQuestionById/" + id
    );
  }
  addQuestion(quest: Questions) {
    return this.http.post<Questions>(this.URLQuestions + "addQuestion", quest);
  }

  saveQuestions(quest: Questions[]) {
    return this.http.post<Questions[]>(this.URLQuestions + "saveQuestions", quest);
  }
  


  updateQuestion(quest: Questions) {
    return this.http.post<Questions>(
      this.URLQuestions + "updateQuestion",
      quest
    );
  }
}
