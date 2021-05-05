import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '././Components/home/home.component';
import { CreateSekerComponent } from '././Components/create-seker/create-seker.component';
import { CreateComponent } from '././Components/create/create.component';
import { CreateQuestionComponent } from '././Components/create-question/create-question.component';
import { LoginComponent } from '././Components/login/login.component';
import { RegisterComponent } from '././Components/register/register.component';
import { AskedComponent } from '././Components/asked/asked.component';
import { PrivateComponent } from '././Components/private/private.component';
import { ResultsComponent } from '././Components/results/results.component';
import { SkarimComponent } from '././Components/skarim/skarim.component';
import { AddSekerComponent } from '././Components/add-seker/add-seker.component';
import { MySkarimComponent } from '././Components/my-skarim/my-skarim.component';
import { AnswerSekerComponent } from '././Components/answer-seker/answer-seker.component';

import { EndComponent} from '././Components/end/end.component';
import { from } from 'rxjs';

const routes: Routes = [
 { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'asked', component: AskedComponent, children:[
      { path: 'mySkarim', component:MySkarimComponent  }, 
      { path: 'answerSeker', component:AnswerSekerComponent  }, 
   ]}, 
   {path: 'end', component: EndComponent },

 { path: 'create', component: CreateComponent },

 { path: 'register', component: RegisterComponent }, 
 
 { path: 'createQuestion', component: CreateQuestionComponent }, 
 { path: 'createSeker', component: CreateSekerComponent }, 
 { path: 'private', component: PrivateComponent , children:[
 { path: 'results', component: ResultsComponent }, 
 { path: 'skarim', component: SkarimComponent }, 
 { path: 'addSeker', component: AddSekerComponent, children:[
   { path: 'createSeker', component: CreateSekerComponent }, 
   {path: 'createQuestion', component: CreateQuestionComponent },
   {path: 'end', component: EndComponent },
  ] },

]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
