import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';

export const appRoutes: Routes = [
  { path: 'login', 
    component: LoginComponent  
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'myDetails/:id', 
  component: EmployeeDetailsComponent  
},
];