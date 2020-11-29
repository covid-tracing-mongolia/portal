import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MessagesComponent} from './messages/messages.component';
import {CovidGenerateKeyComponent} from './covid-generate-key/covid-generate-key.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {SecuredHttpInterceptor} from './interceptor/secured-http.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    CovidGenerateKeyComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecuredHttpInterceptor,
      multi: true
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
