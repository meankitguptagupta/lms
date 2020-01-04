import { Component, OnInit } from '@angular/core';
import { FormFields } from 'src/app/models/form-fields';
import * as LoginDefination from 'src/app/forms-defination/login';
import { Login } from 'src/app/models/forms/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  spinnerStatus:boolean = false;

  ngOnInit() { }

  getFields():Array<FormFields> {
    return LoginDefination.default;
  }

  submit(form:Login) {
    this.spinnerStatus = true;
  }

}
