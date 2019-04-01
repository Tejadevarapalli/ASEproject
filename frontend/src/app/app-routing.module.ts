import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeeComponent } from './homee/homee.component';

const routes: Routes = [
  {path: '', component: HomeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
