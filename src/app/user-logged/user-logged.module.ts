import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedRoutingModule } from './user-logged-routing.module';
import { UserLoggedComponent } from './user-logged.component';


@NgModule({
  declarations: [UserLoggedComponent],
  imports: [
    CommonModule,
    UserLoggedRoutingModule
  ]
})
export class UserLoggedModule { }
