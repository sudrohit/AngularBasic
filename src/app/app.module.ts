import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import {LoggerModule } from 'ngx-logger';
import { environment } from 'src/environments/environment';

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
} 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LoggerModule.forRoot(environment.logging)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
