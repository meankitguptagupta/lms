import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

// guards
import { NoAuthGuard } from 'src/app/guards/no-auth/no-auth.guard';

const routes: Routes = [{
    path: 'auth',
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    children: [{
        path: '',
        component: LoginComponent
    }, {
        path: 'signup',
        component: SignupComponent
    },{
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },{
        path: 'reset-password',
        component: ResetPasswordComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
