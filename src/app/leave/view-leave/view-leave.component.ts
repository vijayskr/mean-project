import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';
import { Leave } from 'src/app/models/leave';

@Component({
  selector: 'view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit {

  leave: Leave = new Leave();

  constructor(private router: Router, private leaveSvc: LeaveService) { }

  ngOnInit() {
    this.viewLeave('');
  }

  applyLeave() {
    this.router.navigateByUrl('/applyLeave');
  }

  //Apply Leave
  viewLeave = (id: string) => {
    this.leaveSvc.viewLeave(id).subscribe(res => {
      this.leave = res;
    }, err => {
      console.log(err);
    });
  }
}
