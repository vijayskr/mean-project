import { Component, OnInit } from '@angular/core';
import { Leave } from '../models/leave';
import { LeaveService } from '../services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leave: Leave = new Leave();
  error = false;
  errorMsg = '';

  constructor(private leaveSvc: LeaveService, private router: Router) { }

  ngOnInit() {
    this.clearError();
  }

  // OnStartDate Changed
  onStartDateChanged = (value: any) => {
    this.leave.startDate = value;
    if (this.leave.endDate !== undefined) {
      this.calculateNumberOfDays(this.leave.startDate, this.leave.endDate);
    }
  }
  // OnEndDate Changed
  onEndDateChanged = (value: any) => {
    this.leave.endDate = value;
    if (this.leave.startDate !== undefined) {
      this.calculateNumberOfDays(this.leave.startDate, this.leave.endDate);
    }
  }


  calculateNumberOfDays(startDate: Date, endDate: Date) {
    let diff = 0;
    const days = 1000 * 60 * 60 * 24;
    diff = endDate.valueOf() - startDate.valueOf();

    this.leave.noOfDays = Math.floor(diff / days) === 0 ? 1 : Math.floor(diff / days);
  }
  // Apply Leave
  applyLeave = (leave: Leave) => {
    this.clearError();
    this.leaveSvc.applyLeave(leave).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/viewLeave');
    }, err => {
      this.showError('Failed to save data!');
      console.log(err);
    });
  }
  clearError() {
    this.error = false;
    this.errorMsg = '';
  }
  showError(errorMsg: string) {
    this.error = true;
    this.errorMsg = errorMsg;
  }
}
