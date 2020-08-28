import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoggedComponent } from './user-logged.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserLoggedComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoggedRoutingModule { }
