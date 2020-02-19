import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { PasswordToggle } from 'src/app/helpers/password-toggle';
import { UserService } from 'src/app/services/user/user.service';
import { APIResponse } from 'src/app/models/api-response';
import { LoginComponent } from '../login/login.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginComponent]
})
export class SignupComponent implements OnInit {

  constructor(private _user:UserService, private loginComp:LoginComponent) { }

  spinnerStatus:boolean = false;
  signupForm:FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('admin@email.com', [Validators.required, Validators.email, Validators.maxLength(191)]),
      password: new FormControl('123456', [Validators.required, Validators.maxLength(191)]),
      first_name: new FormControl('admin', [Validators.required, Validators.maxLength(50)]),
      last_name: new FormControl('user', [Validators.required, Validators.maxLength(50)]),
      contact_number: new FormControl('9876543210', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[\d]{10}$/)]),
    })
  }

  submit():void {
    this.signup(this.signupForm.value);    
  }

  private signup(values:Signup):void {
    this.spinnerStatus = true;
    this._user.signup(values).subscribe((res:APIResponse) => {
      // wait for 100 ms
      timer(100).subscribe(() => {
        this.loginComp.login({email: values.email, password: values.password});
      })
    }, (err:APIResponse) => {
      this.spinnerStatus = false;
    })
  }

  togglePWD(e):void {
    PasswordToggle(e);
  }

}
