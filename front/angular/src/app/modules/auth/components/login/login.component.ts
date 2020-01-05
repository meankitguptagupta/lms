import { Component, OnInit } from '@angular/core';
import { FormFields } from 'src/app/models/form-fields';
import * as LoginDefination from 'src/app/forms-defination/login';
import { Login } from 'src/app/models/forms/login';
import { UsersService } from 'src/app/services/users/users.service';
import { APIResponse } from 'src/app/models/api-response';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Token } from 'src/app/models/token';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _userService:UsersService, 
    private _authService:AuthService,
    private _commonService:CommonService
  ) { }
  
  spinnerStatus:boolean = false;

  ngOnInit() { }

  getFields():Array<FormFields> {
    return LoginDefination.default;
  }

  submit(form:Login) {
    this.spinnerStatus = true;
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
