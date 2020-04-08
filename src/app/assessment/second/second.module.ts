import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from '../second/second.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
   // AppRoutingModule,
    MaterialModule,
    SecondRoutingModule,
    LoggerModule.forRoot(environment.logging)
  ],
  declarations: [SecondComponent]
})
export class SecondModule { }
