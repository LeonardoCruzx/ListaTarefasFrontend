import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoggedComponent } from './user-logged.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoggedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoggedRoutingModule { }
