import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedRoutingModule } from './user-logged-routing.module';
import { UserLoggedComponent } from './user-logged.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/home/components/task/task.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [UserLoggedComponent, HomeComponent, TaskComponent, CreateTaskFormComponent, NavbarComponent],
  imports: [
    CommonModule,
    UserLoggedRoutingModule
  ]
})
export class UserLoggedModule { }
