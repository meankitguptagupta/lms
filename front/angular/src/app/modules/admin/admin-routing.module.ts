import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from 'src/app/guards/auth/auth/auth.guard';
import { RoleGuard } from 'src/app/guards/auth/role/role.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['admin']},
    children:[{
        path:'',
        component: DashboardComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
