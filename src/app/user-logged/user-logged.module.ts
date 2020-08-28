import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedRoutingModule } from './user-logged-routing.module';
import { UserLoggedComponent } from './user-logged.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/home/task/task.component';


@NgModule({
  declarations: [UserLoggedComponent, HomeComponent, TaskComponent],
  imports: [
    CommonModule,
    UserLoggedRoutingModule
  ]
})
export class UserLoggedModule { }
