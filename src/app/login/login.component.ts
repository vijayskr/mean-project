import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: String;
  loginForm: FormGroup;

  constructor(private router: Router) {
    this.title = 'Leave Management Application - Login Form';
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      empId: new FormControl(null, [Validators.required]),
      empPwd: new FormControl(null, [Validators.required])
    });
  }

  loginValidate() {
    const empId = this.loginForm.get('empId').value;
    const empPwd = this.loginForm.get('empPwd').value;
    console.log(empId);
    console.log(empPwd);

    if (empId !== null && empPwd !== null) {
      console.log(empId);
      console.log(empPwd);
      this.router.navigate([`/dashboard/:${empId}`]);
    }
  }
}
