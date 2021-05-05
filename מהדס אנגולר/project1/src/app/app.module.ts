import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { LoginComponent } from './login/login.component';
import { RegiserComponent } from './regiser/regiser.component';
import { CreateSekerComponent } from './create-seker/create-seker.component';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { PrivateComponent } from './private/private.component';
import { SkarimComponent } from './skarim/skarim.component';
import { AddSekerComponent } from './add-seker/add-seker.component';
import { ResultsComponent } from './results/results.component';
import { AskedComponent } from './asked/asked.component';
import { MySkarimComponent } from './my-skarim/my-skarim.component';
import { AnswerSekerComponent } from './answer-seker/answer-seker.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    LoginComponent,
    RegiserComponent,
    CreateSekerComponent,
    CreateComponent,
    PrivateComponent,
    SkarimComponent,
    AddSekerComponent,
    ResultsComponent,
    AskedComponent,
    MySkarimComponent,
    AnswerSekerComponent
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
