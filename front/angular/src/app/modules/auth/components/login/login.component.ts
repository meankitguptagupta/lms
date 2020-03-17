import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { Login as LoginFields } from 'src/app/forms/login';
import { FormButton } from 'src/app/models/form-button';
import { Login } from 'src/app/models/definations/login';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { APIResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _auth:AuthService,
    private _user:UserService,
    private _utility:UtilityService
  ) { }
  button:FormButton = {label: 'login', status: false};

  ngOnInit() { }

  getFields():Array<FormBase> {
    return LoginFields;
  }

  submit(values:Login) {
    this.button.status = true;
    this._user.login(values).subscribe((res:APIResponse) => {
      this._auth.store(res.data).then(() => {
        this._utility.redirect(this._auth.getRole());
      });
    }, (err:APIResponse) => {
      this.button.status = false;
    })
  }

}
