import { Injectable } from '@angular/core';
import {IEmployee} from "./employee";
import {HttpClient} from "@angular/common/http"
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empUrl: string= "http://localhost:4000/employees";

  constructor(private http: HttpClient) { }

  getEmployoees(): Observable <IEmployee[]>{
    return this.http.get<IEmployee[]>(this.empUrl);
  }
}

