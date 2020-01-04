import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ForgotPassword } from 'src/app/models/forms/forgot-password';
import { FormFields } from 'src/app/models/form-fields';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  spinnerStatus:boolean = false;
  
  fields:FormFields[] = [{
    type: 'text',
    name: 'email',
    directives:{
      required: true,
    },
    placeholder: 'Username/Email',
    maxLength: 191,
    validators: [Validators.required, Validators.email, Validators.maxLength(191)],
    faIcon:'fa-envelope'
  }, {
    type: 'button',
    label: 'Send Request',
    sideLink:{
      label: 'Login?',
      anchor: '/login'
    }
  }]

  ngOnInit() { }

  getFields() {
    return this.fields;
  }

  submit(form:ForgotPassword) {
    this.spinnerStatus = true;
    console.log(form)
  }

}
