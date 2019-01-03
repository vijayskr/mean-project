import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewLeaveComponent } from './leave/view-leave/view-leave.component';
import { ApplyLeaveComponent } from './leave/apply-leave/apply-leave.component';

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
  },
  { path: 'applyLeave',
    component: ApplyLeaveComponent
  },
  { path: 'viewLeave',
    component: ViewLeaveComponent
  }
];
