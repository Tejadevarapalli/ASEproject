import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeeComponent } from './homee/homee.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeeComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
