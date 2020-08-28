import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedRoutingModule } from './user-logged-routing.module';
import { UserLoggedComponent } from './user-logged.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [UserLoggedComponent, HomeComponent],
  imports: [
    CommonModule,
    UserLoggedRoutingModule
  ]
})
export class UserLoggedModule { }
