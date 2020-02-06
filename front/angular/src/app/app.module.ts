import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';

import {  HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NotificationComponent } from './components/notification/notification.component';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
