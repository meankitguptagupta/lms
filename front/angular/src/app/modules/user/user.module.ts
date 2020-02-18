import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

// components
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';
import { UserComponent } from './components/user/user.component';
import { SidebarNavigationComponent } from './components/user/sidebar-navigation/sidebar-navigation.component';
import { TopNavigationComponent } from './components/user/top-navigation/top-navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    CreateComponent, ListComponent, 
    UserComponent, SidebarNavigationComponent, 
    TopNavigationComponent, DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
