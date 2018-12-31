import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeLeave } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leave: EmployeeLeave = new EmployeeLeave();
  error: boolean = false;
  errorMsg: string = '';

  constructor(private leaveSvc: LeaveService, private router: Router) { }

  ngOnInit() {
    this.clearError();
  }
  //OnStartDate Changed
  onStartDateChanged = (value: any) => {
    this.leave.startDate = value;
    if (this.leave.endDate != undefined)
      this.calculateNumberOfDays(this.leave.startDate, this.leave.endDate);
  }
  //OnEndDate Changed
  onEndDateChanged = (value: any) => {
    this.leave.endDate = value;
    if (this.leave.startDate != undefined)
      this.calculateNumberOfDays(this.leave.startDate, this.leave.endDate);
  }
  
  
  calculateNumberOfDays(startDate: string, endDate: string) {
    var start: Date = new Date(startDate), 
        end: Date = new Date(endDate), 
        diff = 0, 
        days = 1000*60*60*24;
    diff = end.valueOf() - start.valueOf();

    this.leave.days = Math.floor(diff/days) == 0? 1 : Math.floor(diff/days);
  }
  //Apply Leave
  applyLeave = (leave: EmployeeLeave) => {
    this.clearError();
    this.leaveSvc.applyLeave(leave).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/viewLeave');
    }, err => {
      this.showError('Failed to save data!');
      console.log(err);
    });
  }
  clearError(){
    this.error = false;
    this.errorMsg = '';
  }
  showError(errorMsg: string) {
    this.error = true;
    this.errorMsg = errorMsg;
  }
}
