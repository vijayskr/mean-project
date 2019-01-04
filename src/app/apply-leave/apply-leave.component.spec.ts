import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveComponent } from './apply-leave.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApplyLeaveComponent', () => {
  let component: ApplyLeaveComponent;
  let fixture: ComponentFixture<ApplyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ ApplyLeaveComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  +it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate numbr of days properly', () => {
    fixture.componentInstance.leave = { id:'', startDate: new Date(2018, 12, 18).toLocaleDateString(), endDate: new Date(2018, 12, 20).toLocaleDateString(), days: 0, leaveReason: '', leaveType:'', status: '' };
    fixture.componentInstance.calculateNumberOfDays(fixture.componentInstance.leave.startDate, fixture.componentInstance.leave.endDate);
    expect(fixture.componentInstance.leave.days).toEqual(2);
  });
});
