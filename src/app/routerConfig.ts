import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent
  },
  {
    path: 'mysection/:id',
    component: DashboardComponent
  },
  {
    path: 'mymgrsec/:id',
    component: DashboardComponent
  },
  {
    path: 'myleave/:id',
    component: DashboardComponent
  },
  {
    path: 'myrptleave/:id',
    component: DashboardComponent
  }
];
