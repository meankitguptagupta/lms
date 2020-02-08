import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { FormButton } from 'src/app/models/formButton';
import { APIResponse } from 'src/app/models/forms/api-response';
import { UserService } from 'src/app/services/user/user.service';
import { SignupFields } from 'src/app/form-definitions/signup-fields';
import { SignupButton } from 'src/app/form-definitions/signup-button';
import { Signup } from 'src/app/models/forms/signup';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginComponent]
})
export class SignupComponent implements OnInit, AfterViewInit {

  spinnerStatus:boolean = false;

  constructor(private _user:UserService, private loginComp:LoginComponent) { }

  ngOnInit() {}

  ngAfterViewInit() {}

  getFields():Array<FormBase> {
    return SignupFields;
  }

  getButton():FormButton {
    return SignupButton;
  }

  submit(values:Signup):void {
    this.spinnerStatus = true;
    this._user.signup(values).subscribe((res:APIResponse) => {
      this.loginComp.submit({email: values.email, password: values.password});
    }, (err:APIResponse) => {
      this.spinnerStatus = false;
    })
  }

}
