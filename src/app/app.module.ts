import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routerConfig';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DateValidatorDirective } from './directives/date.validator.directive';
import { ViewLeaveComponent } from './leave/view-leave/view-leave.component';
import { ApplyLeaveComponent } from './leave/apply-leave/apply-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ApplyLeaveComponent,
    EmployeeDetailsComponent,
    DateValidatorDirective,
    ViewLeaveComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
