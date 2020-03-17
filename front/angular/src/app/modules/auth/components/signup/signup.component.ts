import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/definations/signup';
import { UserService } from 'src/app/services/user/user.service';
import { FormBase } from 'src/app/models/formBase';
import { Signup as SignupFields } from 'src/app/forms/signup';
import { FormButton } from 'src/app/models/form-button';
import { APIResponse } from 'src/app/models/api-response';
import { Login } from 'src/app/models/definations/login';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private _user:UserService, 
    private _auth:AuthService,
    private _utility:UtilityService
  ) { }

  button:FormButton = {label: 'signup', status: false};

  ngOnInit() { }

  getFields():Array<FormBase> {
    return SignupFields;
  }

  submit(values:Signup):void {
    this.button.status = true;
    this._user.signup(values).subscribe((res:APIResponse) => {
      setTimeout(() => {
        this.login({email: values.email, password: values.password});
      }, 100);
    }, (err:APIResponse) => {
      this.button.status = false;
    })
  }

  login(values:Login):void {
    this._user.login(values).subscribe((res:APIResponse) => {
      this._auth.store(res.data).then(() => {
        this._utility.redirect(this._auth.getRole());
      });
    }, (err:APIResponse) => {
      this.button.status = false;
    })
  }

}
