import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm:FormGroup;
  spinnerStatus:boolean = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.maxLength(191), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(191)]),
    })
  }

  submitLogin(form) {
    this.spinnerStatus = true;
  }

}
