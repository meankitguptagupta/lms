import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/books/create/create.component';
import { ListComponent } from './components/books/list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { TopNavigationComponent } from './components/user/top-navigation/top-navigation.component';
import { RightNavigationComponent } from './components/user/right-navigation/right-navigation.component';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  declarations: [
    UserComponent, 
    DashboardComponent, 
    CreateComponent, 
    ListComponent, TopNavigationComponent, RightNavigationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UtilityModule
  ]
})
export class UserModule { }
