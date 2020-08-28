import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
