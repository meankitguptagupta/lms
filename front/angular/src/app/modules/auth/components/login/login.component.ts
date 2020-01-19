import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/models/formBase';
import { LoginFields } from 'src/app/form-definitions/login-fields';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  getFields():Array<FormBase> {
    return LoginFields;
  }

}
