import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'books',
    component: ListComponent,
  }, {
    path: 'books/create',
    component: CreateComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
