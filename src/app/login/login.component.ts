import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string;
   constructor() { 
      this.title = 'Leave Management Application - Login Form';
      //this.responseMessage='';
      }
 
  ngOnInit(): void {
   
  }
}