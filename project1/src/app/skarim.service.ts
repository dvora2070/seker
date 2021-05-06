import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skarim } from "./models/skarim.model";

@Injectable({
  providedIn: "root",
})
export class SkarimService {
  constructor(private http: HttpClient) {}
  URL= "http://localhost:45636/api/skarim/";

  getSkarimByUserId(userId: number) {
    return this.http.get<Skarim[]>(
      this.URL + "GetSkarimByUserId/" + userId
    );
  }
  getSkarimById(id: number) {
    return this.http.get<Skarim>(
      this.URL + "GetSkarimById/" + id
    );
  }

  addSeker(seker: Skarim) {
    return this.http.post<Skarim>(
      this.URL + "AddSeker",
      seker
    );
  }

  updateSeker(seker: Skarim) {
    return this.http.post<Skarim>(
      this.URL + "UpdateSeker",
      seker
    );
  }
  uploadImage(sekerId, image) {
    let formData: FormData = new FormData();
    formData.append('Image', image);
    formData.append('SekerId', sekerId);
    return this.http.post(`${this.URL}UploadImage`, formData);
  }
}
