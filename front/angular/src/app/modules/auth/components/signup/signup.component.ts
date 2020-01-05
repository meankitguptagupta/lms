import { Component, OnInit } from '@angular/core';
import { FormFields } from 'src/app/models/form-fields';
import * as SignupDefination from 'src/app/forms-defination/signup';
import { Signup } from 'src/app/models/forms/signup';
import { UsersService } from 'src/app/services/users/users.service';
import { APIResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _userService:UsersService) { }
  
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
      let credentials = {email: form.email, password: form.password};
      // login user after signup
      this._userService.login(credentials).subscribe((res:APIResponse) => {
        // save token response
        console.log(res);
        this.spinnerStatus = false;
      }, err => {
        // disable spinner to enable button on error
        this.spinnerStatus = false;
      })
    }, (err:APIResponse) => {
      // disable spinner to enable button on error
      this.spinnerStatus = false;
    })
  }
}
