import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormFields } from 'src/app/models/form-fields';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  
  spinnerStatus:boolean = false;

  fields:FormFields[] = [{
    type: 'text',
    name: 'email',
    directives: {
      required: true
    },
    placeholder: 'Username/Email',
    maxLength: 191,
    validators: [Validators.required, Validators.email, Validators.maxLength(191)],
    faIcon:'fa-envelope'
  }, {
    type: 'password',
    name: 'password',
    directives: {
      required: true
    },
    placeholder: 'Password',
    maxLength: 191,
    validators: [Validators.required, Validators.maxLength(191)]
  }, {
    type: 'text',
    name: 'contact_number',
    directives: {
      required: true,
      numberOnly:true
    },
    placeholder: 'Contact Number',
    maxLength: 10,
    validators: [Validators.required, Validators.maxLength(10), Validators.pattern(/^[\d]{10}/g)],
    faIcon:'fa-phone',
  }, {
    type: 'button',
    label: 'Signup',
    sideLink:{
      label: 'Login?',
      anchor: '/login'
    }
  }]

  getFields() {
    return this.fields;
  }

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   email: new FormControl('admin@email.com', [Validators.required, Validators.email, Validators.maxLength(191)]),
    //   password: new FormControl('123456', [Validators.required, Validators.maxLength(191)]),
    //   first_name: new FormControl('admin', [Validators.required, Validators.maxLength(50)]),
    //   last_name: new FormControl('user', [Validators.required, Validators.maxLength(50)]),
    //   contact_number: new FormControl('1234567890', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[\d]{10}/g)])
    // })
  }
}
