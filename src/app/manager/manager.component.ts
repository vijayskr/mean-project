import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  employee: Employee;
  empId: number;

  constructor(private httpSvc: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.empId = this.route.snapshot.params['id'];
    this.httpSvc.getMgr(this.empId).subscribe(
      emps => this.employee = emps.find(e => +e.EMP_ID === this.empId)
    );
  }

}
