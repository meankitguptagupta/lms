import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm:FormGroup;
  spinnerStatus:boolean = false;

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('admin@email.com', [Validators.required, Validators.email, Validators.maxLength(191)]),
      password: new FormControl('123456', [Validators.required, Validators.maxLength(191)]),
      first_name: new FormControl('admin', [Validators.required, Validators.maxLength(50)]),
      last_name: new FormControl('user', [Validators.required, Validators.maxLength(50)]),
      contact_number: new FormControl('1234567890', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[\d]{10}/g)])
    })
  }

  toggleType(e:any) {
    let field = e.currentTarget.parentNode.querySelector('input');

    if(field.type === 'password') {
      field.type = 'text';
      e.currentTarget.querySelector('.fa').classList.add('fa-eye-slash');
      e.currentTarget.querySelector('.fa').classList.remove('fa-eye');
      return;
    }
      
    field.type = 'password';
    e.currentTarget.querySelector('.fa').classList.add('fa-eye');
    e.currentTarget.querySelector('.fa').classList.remove('fa-eye-slash');      
  }
}
