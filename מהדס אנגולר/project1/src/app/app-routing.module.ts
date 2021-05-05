import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSekerComponent } from './create-seker/create-seker.component';
import { CreateComponent } from './create/create.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { LoginComponent } from './login/login.component';
import { RegiserComponent } from './regiser/regiser.component';
import { AskedComponent } from './asked/asked.component';
import { PrivateComponent } from './private/private.component';
import { ResultsComponent } from './results/results.component';
import { SkarimComponent } from './skarim/skarim.component';
import { AddSekerComponent } from './add-seker/add-seker.component';
import { MySkarimComponent } from './my-skarim/my-skarim.component';
import { AnswerSekerComponent } from './answer-seker/answer-seker.component';


const routes: Routes = [
 { path: 'create', component: CreateComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegiserComponent }, 
 { path: 'asked', component: AskedComponent, children:[
   { path: 'mySkarim', component:MySkarimComponent  }, 
 ] }, 
 { path: 'createQuestion', component: CreateQuestionComponent }, 
 { path: 'createSeker', component: CreateSekerComponent }, 
 { path: 'private', component: PrivateComponent , children:[
 { path: 'results', component: ResultsComponent }, 
 { path: 'skarim', component: SkarimComponent }, 
 { path: 'addSeker', component: AddSekerComponent, children:[
   { path: 'createSeker', component: CreateSekerComponent }, 
   {path: 'createQuestion', component: CreateQuestionComponent },
  ] }
]},
 
 { path: 'answerSeker', component:AnswerSekerComponent  }, 
//  { path: '', redirectTo:'/private',pathMatch:'/skarim'  }, 
//  { path: '', redirectTo:'/private',pathMatch:'/addSeker'  }, 
//  { path: '', redirectTo:'/private',pathMatch:'/skarim'  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
