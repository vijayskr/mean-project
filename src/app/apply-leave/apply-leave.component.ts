import { Component, OnInit } from '@angular/core';
import { Leave } from '../models/leave';

@Component({
  selector: 'apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leave: Leave = new Leave();
  constructor() { }

  ngOnInit() {
  }

}
