import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = "http://localhost:8989/employee";

  constructor(public http: HttpClient) {

  }
  getMgr(id: number): Observable<any> {
    console.log(id);
    return this.http.get<any>(this.url + '/getmanagerdetails', httpOptions)
      .pipe(
        catchError(err => this.handleError(err, id))
      );
  }

  handleError(arg0: string, data: any): any {
    throw new Error("Error fetching the Manager  data!!." + arg0);
  }
}
