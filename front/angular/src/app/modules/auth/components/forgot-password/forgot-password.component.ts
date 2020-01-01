import { Component, OnInit } from '@angular/core';
import { FormFields } from '../../../../models/form-fields';
import { Validators } from '@angular/forms';

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
    required: true,
    placeholder: 'Username/Email',
    maxLength: 191,
    validators: [Validators.required, Validators.email, Validators.maxLength(191)]
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

  submit(form) {
    this.spinnerStatus = true;
    console.log(form)
  }

}
