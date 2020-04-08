import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from '../first/first.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
   // AppRoutingModule,
    MaterialModule,
    FirstRoutingModule,
    LoggerModule.forRoot(environment.logging)
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
