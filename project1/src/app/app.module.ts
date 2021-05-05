import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { LoginComponent } from './login/login.component';
import { RegiserComponent } from './regiser/regiser.component';
import { CreateSekerComponent } from './create-seker/create-seker.component';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { SkarimComponent } from './skarim/skarim.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    LoginComponent,
    RegiserComponent,
    CreateSekerComponent,
    CreateComponent,
    SkarimComponent
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
