import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes:Routes = [{
    path: '',
    component: AuthComponent,
    children: [{
        path: '',
        component: LoginComponent
    }, {
        path: 'signup',
        component: SignupComponent
    }, {
        path: 'reset-password',
        component: ResetPasswordComponent
    }, {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }