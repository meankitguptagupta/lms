import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { UtilityModule } from '../utility/utility.module';

@NgModule({
  declarations: [
    LoginComponent, SignupComponent, 
    ForgotPasswordComponent, ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UtilityModule
  ]
})
export class AuthModule { }
