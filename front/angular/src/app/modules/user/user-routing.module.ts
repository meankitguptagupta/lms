import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';

const routes:Routes = [{
    path: '',
    component: UserComponent,
    children: [{
        path: '',
        component: DashboardComponent
    }, {
        path: 'books',
        children: [{
            path: '',
            component: ListComponent
        }, {
            path: 'new',
            component: CreateComponent
        }]
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}