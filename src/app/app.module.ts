import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRoutes } from './routerConfig';
import { FormsModule } from '@angular/forms';
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
    DateValidatorDirective,
    ViewLeaveComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
