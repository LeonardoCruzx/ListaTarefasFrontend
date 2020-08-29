import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedRoutingModule } from './user-logged-routing.module';
import { UserLoggedComponent } from './user-logged.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/home/components/task/task.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserLoggedComponent, HomeComponent, TaskComponent, CreateTaskFormComponent, NavbarComponent],
  imports: [
    CommonModule,
    UserLoggedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserLoggedModule { }
