import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Asked } from './models/asked.model';

@Injectable({
  providedIn: 'root'
})
export class AskedService {

 
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addAsked(asked: Asked){
  return this.http.post<Asked>(this.apiUrl + "/api/Asked/AddAsked", asked);

  }
  updateAsked(asked: Asked){
    return this.http.post<Asked>(this.apiUrl + "/api/Asked/UpdateAsked", asked);
  
    }
  


  getAllAsked(){
    return this.http.get<Asked[]>(this.apiUrl + "/api/Asked/getallAsked");
  
 }
 getAskedById(id:number){
  return this.http.get<Asked>(this.apiUrl + "/api/Asked/getAskedById/"+id);
 }


}
