import { Component, OnInit } from '@angular/core';
import { Leave } from '../models/leave';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leave: Leave = new Leave();

  constructor(private leaveSvc: LeaveService) { }

  ngOnInit() {
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

    this.leave.days = Math.floor(diff/days);
  }

  validateStartAndEndDates(startDate: string, endDate: string) {
    let today = new Date();
    var start: Date = new Date(startDate), 
        end: Date = new Date(endDate); 
    //if (start.valueOf() < today.valueOf())

  }
  //Apply Leave
  applyLeave = (leave: Leave) => {
    this.leaveSvc.applyLeave(leave).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
