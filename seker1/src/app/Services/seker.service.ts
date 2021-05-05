import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SekerService {
  MyUrl:string="http:\/\/localhost:57784/";      // קישור ל C#

  constructor(private http:HttpClient) { }


  isExistUser(user:string,password:string)
  {
     return this.http.get(this.MyUrl+"api/Users/FindUserAndPassword?name="+user+"&password="+password);
  }
}
