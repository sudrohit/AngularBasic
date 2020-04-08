import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path : 'secondcomponent',
    loadChildren: './assessment/second/second.module#SecondModule'
  },
  {
    path : 'firstcomponent',
    loadChildren: './assessment/first/first.module#FirstModule'
  },
  {
    path: '',
    redirectTo: 'firstcomponent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
