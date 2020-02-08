import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { LoginFields } from 'src/app/form-definitions/login-fields';
import { LoginButton } from 'src/app/form-definitions/login-button';
import { FormButton } from 'src/app/models/formButton';
import { Login } from 'src/app/models/forms/login';
import { UserService } from 'src/app/services/user/user.service';
import { APIResponse } from 'src/app/models/forms/api-response';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _user:UserService, 
    private _auth:AuthService,
    private _utility:UtilityService
  ) { }

  ngOnInit() { }

  spinnerStatus:boolean = false;

  getFields():Array<FormBase> {
    return LoginFields;
  }

  getButton():FormButton {
    return LoginButton;
  }

  submit(values:Login):void {
    this.spinnerStatus = true;
    this._user.login(values).subscribe((res:APIResponse) => {
      this._auth.store(res.data).then(() => {
        this._utility.redirect(this._auth.getRole());
      });
    }, (err:APIResponse) => {
      this.spinnerStatus = false;
    })
  }
}
