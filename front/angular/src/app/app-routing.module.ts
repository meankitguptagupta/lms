import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule )
}, {
  path: ':role',
  canActivate: [AuthGuard, RoleGuard],
  loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
