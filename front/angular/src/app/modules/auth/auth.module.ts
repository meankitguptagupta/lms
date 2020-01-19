import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent, SignupComponent, 
    ResetPasswordComponent, ForgotPasswordComponent
  ],
  imports: [
    CommonModule, AuthRoutingModule, SharedModule
  ]
})
export class AuthModule { }
