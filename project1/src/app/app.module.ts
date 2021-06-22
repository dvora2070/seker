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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SkarimComponent } from './skarim/skarim.component';
import { AllSkarimComponent } from './all-skarim/all-skarim.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SekerResultsComponent } from './seker-results/seker-results.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetAskedComponent } from './set-asked/set-asked.component';
import { ViewSekerComponent } from './view-seker/view-seker.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    LoginComponent,
    RegiserComponent,
    CreateSekerComponent,
    SkarimComponent,
    AllSkarimComponent,
    AllUsersComponent,
    SekerResultsComponent,
    SetAskedComponent,
    ViewSekerComponent,
    SpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

    
  ],entryComponents: [CreateSekerComponent,SetAskedComponent,SpinnerOverlayComponent ],
  providers: [  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {  provide: MAT_DATE_LOCALE, useValue: 'he-IL'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
   

   },],
  bootstrap: [AppComponent]
})
export class AppModule { }
