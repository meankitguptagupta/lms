import { Component, OnInit } from '@angular/core';
import { FormFields } from 'src/app/models/form-fields';
import * as SignupDefination from 'src/app/forms-defination/signup';
import { Signup } from 'src/app/models/forms/signup';
import { UsersService } from 'src/app/services/users/users.service';
import { APIResponse } from 'src/app/models/api-response';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonService } from 'src/app/services/common/common.service';
import { Token } from 'src/app/models/token';
import { Login } from 'src/app/models/forms/login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private _userService:UsersService, 
    private _authService:AuthService,
    private _commonService:CommonService
  ) { }
  
  spinnerStatus:boolean = false;

  // get signup fields
  getFields():Array<FormFields> {
    return SignupDefination.default;
  }

  ngOnInit() { }

  submit(form:Signup) {
    // enable spinner to disable button until process complete
    this.spinnerStatus = true;

    this._userService.signup(form).subscribe((res:APIResponse) => {
      // login user after signup
      this.login({email: form.email, password: form.password});
    }, (err:APIResponse) => {
      // disable spinner to enable button on error
      this.spinnerStatus = false;
    })
  }

  login(form:Login):void {
    this._userService.login(form).subscribe((res:APIResponse) => {
      // save login detail into session-storage
      this._authService.store(res.data as Token).then((res:boolean) => {
        // redirect to page
        this._commonService.redirect(this._authService.getRole());
      })
    }, (err:APIResponse) => {
      this.spinnerStatus = false;
    })
  }
}
