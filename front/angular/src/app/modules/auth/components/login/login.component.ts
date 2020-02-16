import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordToggle } from 'src/app/helpers/password-toggle';
import { Login } from 'src/app/models/login';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonService } from 'src/app/services/common/common.service';
import { APIResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (
    private _user:UserService, 
    private _auth:AuthService, 
    private _common:CommonService
  ) { }

  spinnerStatus:boolean = false;
  loginForm:FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(191)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(191)]),
    })
  }

  submit(values:Login):void {
    this.spinnerStatus = true;
    this._user.login(values).subscribe((res:APIResponse) => {
      this._auth.store(res.data).then(() => {
        this._common.redirect(this._auth.getRole());
      });
    }, (err:APIResponse) => {
      this.spinnerStatus = false;
    })
  }

  togglePWD(e):void {
    PasswordToggle(e);
  }

}
