import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { LoginFields } from 'src/app/form-definitions/login-fields';
import { LoginButton } from 'src/app/form-definitions/login-button';
import { FormButton } from 'src/app/models/formButton';
import { Login } from 'src/app/models/forms/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  spinnerStatus:boolean = false;

  getFields():Array<FormBase> {
    return LoginFields;
  }

  getButton():FormButton {
    return LoginButton;
  }

  submit(values:Login) {
    console.log(values);
  }
}
