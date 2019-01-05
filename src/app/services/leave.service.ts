import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Leave } from '../models/leave';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { AppError } from '../models/appError';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  url: string = "http://localhost:8989/employees";
  
  constructor(public http: HttpClient) {
  }

  applyLeave(leave: Leave): Observable<any> {
    return this.http.post<any>(this.url + '/applyLeave', leave, httpOptions)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  viewLeave(id: String): Observable<Employee | AppError> {
    let emp = new Employee();

    return this.http.get<Employee>(this.url + '/viewLeave')
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  private handleError(err: HttpErrorResponse) : Observable<AppError>{
    let dataError = new AppError();
    dataError.errorNumber=100;
    dataError.message = err.message;
    dataError.friendlyMessage = "An error occured while processing the request!!";
    return of(dataError);
  }
}
