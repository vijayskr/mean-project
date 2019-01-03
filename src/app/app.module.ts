import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routerConfig';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DateValidatorDirective } from './directives/date.validator.directive';
import { ViewLeaveComponent } from './leave/view-leave/view-leave.component';
import { ApplyLeaveComponent } from './leave/apply-leave/apply-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ApplyLeaveComponent,
    DateValidatorDirective,
    ViewLeaveComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
