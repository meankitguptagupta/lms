import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { BookModule } from './modules/book/book.module';
import { RegisterModule } from './modules/register/register.module';
import { StudentModule } from './modules/student/student.module';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';

// interceptors
import { ApiInterceptor } from './interceptors/ApiInterceptor';
import { LoadingInterceptor } from './interceptors/LoadingInterceptor';
import { TokenInterceptor } from './interceptors/TokenInterceptor';
import { ResponseInterceptor } from './interceptors/ResponseInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule, AdminModule, BookModule, 
    RegisterModule, StudentModule, UserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
