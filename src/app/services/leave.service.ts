import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeLeave } from '../models/leave';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  url: string = "http://localhost:8989/employee";
  
  constructor(public http: HttpClient) {

  }
  // getUsers() {
  //   let url = this.protectedUrl + "/users?token=" + localStorage.getItem("token");
  //   return this.http.get<User[]>(url);
  // }

  // deleteUser(user: User): Observable<any> {
  //   return this.http.post<any>(this.protectedUrl + "/usersDelete?token=" + localStorage.getItem("token"), user, httpOptions)
  //     .pipe(
  //       //catchError(val => of(`I caught: ${val}`))
  //       catchError(err => this.handleError(err, user))
  //     );
  // }

  // signUp(user: User): Observable<any> {
  //   return this.http.post<any>(this.url + '/signup', user, httpOptions)
  //     .pipe(
  //       //catchError(val => of(`I caught: ${val}`))
  //       catchError(err => this.handleError(err, user))
  //     );
  // }

  // authenticate(user: User): Observable<any> {
  //   return this.http.post<any>(this.url + '/authenticate', user, httpOptions)
  //     .pipe(
  //       //catchError(val => of(`I caught: ${val}`))
  //       catchError(err => this.handleError(err, user))
  //     );
  // }
  applyLeave(leave: EmployeeLeave): Observable<any> {
    return this.http.post<any>(this.url + '/applyLeave', leave, httpOptions)
      .pipe(
        catchError(err => this.handleError(err, leave))
      );
  }

  viewLeave(id: String): Observable<any> {
    return this.http.get<any>(this.url + '/viewLeave')
      .pipe(
        catchError(err => this.handleError(err, id))
      );
  }

  handleError(arg0: string, data: any): any {
    throw new Error("Error postng data!!." + arg0);
  }
}
