import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { AllSkarimComponent } from './all-skarim/all-skarim.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SekerResultsComponent } from './seker-results/seker-results.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetAskedComponent } from './set-asked/set-asked.component';
import { ViewSekerComponent } from './view-seker/view-seker.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    LoginComponent,
    RegiserComponent,
    CreateSekerComponent,
    CreateComponent,
    SkarimComponent,
    AllSkarimComponent,
    AllUsersComponent,
    SekerResultsComponent,
    SetAskedComponent,
    ViewSekerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,

    
  ],entryComponents: [CreateSekerComponent,SetAskedComponent ],
  providers: [  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {  provide: MAT_DATE_LOCALE, useValue: 'he-IL'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
