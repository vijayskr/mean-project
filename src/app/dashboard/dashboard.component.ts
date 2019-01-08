import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myID: Number;

  constructor(private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    const routeParams = this.route.snapshot.params;
    console.log(routeParams.id);
    this.myID = routeParams.id;
  }

  toReporteeLeave() {
    this.router.navigate([`/myrptleave/${this.myID}`]);
  }

  toMyDetails() {
    this.router.navigate([`/mysection/${this.myID}`]);
  }

  toMyMgrDetails() {
    this.router.navigate([`/mymgrsec/${this.myID}`]);
  }

  toMyLeave() {
    this.router.navigate([`/myleave/${this.myID}`]);
  }
}
