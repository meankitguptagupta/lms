import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { NoAuthGuard } from './guards/no-auth/no-auth.guard';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';


const routes: Routes = [{
  path: 'auth',
  canActivate: [NoAuthGuard],
  loadChildren: () =>  import('./modules/auth/auth.module').then(mod => mod.AuthModule)
}, {
  path: ':role',
  canActivate: [AuthGuard, RoleGuard], 
  loadChildren: () =>  import('./modules/user/user.module').then(mod => mod.UserModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
