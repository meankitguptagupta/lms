import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { TopbarNavigationComponent } from './components/user/topbar-navigation/topbar-navigation.component';
import { SidebarNavigationComponent } from './components/user/sidebar-navigation/sidebar-navigation.component';

@NgModule({
  declarations: [
    UserComponent, 
    DashboardComponent, 
    CreateComponent, 
    ListComponent, 
    TopbarNavigationComponent, 
    SidebarNavigationComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule
  ]
})
export class UserModule { }
