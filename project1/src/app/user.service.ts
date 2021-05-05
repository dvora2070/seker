import { Injectable } from '@angular/core';
import { Users } from './models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: Users){
  return this.http.post<Users>("http://localhost:45636/api/users/register", user);

  }
  getAllUsers(){
    return this.http.get<Users[]>("http://localhost:45636/api/users/getallusers");
  
 }
 login(userName: string, password:string){
  return this.http.get<Users>("http://localhost:45636/api/users/login/"+userName+"/"+password);
 }




}
