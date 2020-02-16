import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { PasswordToggle } from 'src/app/helpers/password-toggle';
import { UserService } from 'src/app/services/user/user.service';
import { APIResponse } from 'src/app/models/api-response';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginComp:LoginComponent;

  constructor(private _user:UserService) { }

  spinnerStatus:boolean = false;
  signupForm:FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(191)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(191)]),
      first_name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      last_name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      contact_number: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[\d]{10}$/)]),
    })
  }

  submit(values:Signup):void {
    this.spinnerStatus = true;
    this._user.signup(values).subscribe((res:APIResponse) => {
      this.loginComp.submit({email: values.email, password: values.password});
    }, (err:APIResponse) => {
      this.spinnerStatus = false;
    })
  }

  togglePWD(e):void {
    PasswordToggle(e);
  }

}
