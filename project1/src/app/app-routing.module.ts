import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSekerComponent } from './create-seker/create-seker.component';
import { CreateComponent } from './create/create.component';
import { RegiserComponent } from './regiser/regiser.component';
import { LoginComponent } from './login/login.component';
import { AllSkarimComponent } from './all-skarim/all-skarim.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SekerResultsComponent } from './seker-results/seker-results.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ViewSekerComponent } from './view-seker/view-seker.component';


const routes: Routes = [
 { path: 'createSeker', component: CreateSekerComponent },
 { path: 'questions/:id', component: CreateQuestionComponent },
 { path: 'create', component: CreateComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegiserComponent },
 { path: 'skarim', component: AllSkarimComponent },
 { path: 'seker/:id/:askedId', component: ViewSekerComponent },
 { path: 'asked', component: AllUsersComponent },
 { path: 'results', component: SekerResultsComponent },
 {
  path: '**', redirectTo: 'login'
},
 { path:'', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
