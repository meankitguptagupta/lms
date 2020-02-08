import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { RoleRouteGuard } from 'src/app/guards/role-route/role-route.guard';

const routes:Routes = [{
    path: ':role',
    component: UserComponent,
    canActivate: [AuthGuard, RoleRouteGuard], 
    children: [{
        path: '',
        component: DashboardComponent
    }, {
        path: 'books',
        component: ListComponent,
        children: [{
            path: 'create',
            component: CreateComponent
        }]
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }