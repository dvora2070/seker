import { AnsOfQuest } from "./ansOFquest.model";
import { AnsOfAsked } from "./ansOFasked.model";
export class Questions{
     kod_quest:number;
     kod_skr:number;
     num_quest:number; 
     text_quest:string; 
     type_ans:number;
     ismust_quest:boolean; 

     AnsOfQuest:AnsOfQuest[];
     AnsOfAsked:AnsOfAsked[];
}