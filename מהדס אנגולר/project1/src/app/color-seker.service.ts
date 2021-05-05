import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSekerService {

 gcolor:string="";
 fcolor:string="";
 text:string="";
 url1: string | ArrayBuffer = "";
 url2: string | ArrayBuffer = "";
  constructor() { }
}
