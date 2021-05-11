import { Injectable } from '@angular/core';
import { Users } from './models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;
  loginUser = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  register(user: Users){
  return this.http.post<Users>(this.apiUrl + "/api/users/register", user);

  }
  getAllUsers(){
    return this.http.get<Users[]>(this.apiUrl + "/api/users/getallusers");
  
 }
 login(userName: string, password:string){
  return this.http.get<Users>(this.apiUrl + "/api/users/login/"+userName+"/"+password);
 }




}
