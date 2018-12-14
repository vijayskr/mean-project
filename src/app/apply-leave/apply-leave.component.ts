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

  //Apply Leave
  applyLeave = (leave: Leave) => {
    this.leaveSvc.applyLeave(leave).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
