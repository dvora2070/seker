import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSekerComponent } from './create-seker/create-seker.component';
import { CreateComponent } from './create/create.component';
import { RegiserComponent } from './regiser/regiser.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 { path: 'createSeker', component: CreateSekerComponent },
 { path: 'create', component: CreateComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegiserComponent },
{path:'', component: RegiserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
