import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/models/leave';
import { LeaveService } from 'src/app/services/leave.service';
import { AppError } from 'src/app/models/appError';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leave: Leave = new Leave();
  error = false;
  errorMsg = '';
  myID: Number;

  constructor(
    private leaveSvc: LeaveService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clearError();
    this.leave.empId = +localStorage.getItem('empId');
    this.leave.leaveType = 'EL';
    const queryParams = this.route.snapshot.queryParams;
    const routeParams = this.route.snapshot.params;
    console.log(routeParams.id);
    this.myID = routeParams.id;
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

    if (diff === 0) {
      this.leave.noOfDays = 1;
      return;
    }

    this.leave.noOfDays = Math.floor(diff / days) + 1;
  }
  // Apply Leave
  applyLeave = (leave: Leave) => {
    this.clearError();
    if (!this.validateStartAndEndDates(leave.startDate, leave.endDate)) {
      return false;
    }

    this.leaveSvc.applyLeave(leave).subscribe(
      res => {
        if (res instanceof AppError) {
          this.showError(res.message);
          return;
        }
        this.router.navigateByUrl('/viewLeave');
      },
      err => {
        this.showError('Failed to save data!');
        console.log(err);
      }
    );
  }

  validateStartAndEndDates(startDt: Date, endDt: Date) {
    let dt = new Date();
    let yr = dt.getFullYear();
    let month =
      dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
    let day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();

    let today = new Date(yr + '-' + month + '-' + day);

    console.log(
      'start',
      startDt,
      'end',
      endDt,
      'today',
      yr + '-' + month + '-' + day
    );

    var msDateStart = Date.UTC(
      start.getFullYear(),
      start.getMonth() + 1,
      start.getDate()
    );

    var msDateEnd = Date.UTC(
      end.getFullYear(),
      end.getMonth() + 1,
      end.getDate()
    )

    var msToday = Date.UTC(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );

    if (msDateEnd < msDateStart) {
      this.showError('End date cannot be less than start date!');
      return false;
    }

    if (msDateStart < msToday) {
      this.showError('Start date cannot be a past date!');
      return false;
    }
    return true;
  }
  clearError() {
    this.error = false;
    this.errorMsg = '';
  }
  showError(errorMsg: string) {
    this.error = true;
    this.errorMsg = errorMsg;
  }
  cancel = () => {
    this.router.navigate([`/myleave/${this.myID}`]);
  }
}
