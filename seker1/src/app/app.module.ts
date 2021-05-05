import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from '././Components/create-question/create-question.component';
import { LoginComponent } from '././Components/login/login.component';
import { RegisterComponent } from '././Components/register/register.component';
import { CreateSekerComponent } from '././Components/create-seker/create-seker.component';
import { NgModule } from '@angular/core';
import { CreateComponent } from '././Components/create/create.component';
import { PrivateComponent } from '././Components/private/private.component';
import { SkarimComponent } from '././Components/skarim/skarim.component';
import { AddSekerComponent } from '././Components/add-seker/add-seker.component';
import { ResultsComponent } from '././Components/results/results.component';
import { AskedComponent } from '././Components/asked/asked.component';
import { MySkarimComponent } from '././Components/my-skarim/my-skarim.component';
import { AnswerSekerComponent } from '././Components/answer-seker/answer-seker.component';
import { HomeComponent } from './Components/home/home.component';
import { EndComponent } from './Components/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    LoginComponent,
    RegisterComponent,
    CreateSekerComponent,
    CreateComponent,
    PrivateComponent,
    SkarimComponent,
    AddSekerComponent,
    ResultsComponent,
    AskedComponent,
    MySkarimComponent,
    AnswerSekerComponent,
    HomeComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
