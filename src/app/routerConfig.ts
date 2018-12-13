import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';

export const appRoutes: Routes = [
  { path: 'login', 
    component: LoginComponent  
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'applyLeave',
    component: ApplyLeaveComponent
  }
  
];