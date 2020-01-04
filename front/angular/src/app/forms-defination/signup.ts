import { Validators } from '@angular/forms';

export default [{
    type: 'text',
    name: 'email',
    value: 'admin@email.com',
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
    value: '123456',
    directives: {
      required: true
    },
    placeholder: 'Password',
    maxLength: 191,
    validators: [Validators.required, Validators.maxLength(191)]
  }, {
    type: 'text',
    name: 'first_name',
    value: 'admin',
    directives: {
      required: true
    },
    placeholder: 'First Name',
    maxLength: 50,
    validators: [Validators.required, Validators.maxLength(50)],
    faIcon:'fa-user',
  }, {
    type: 'text',
    name: 'last_name',
    value: 'user',
    directives: {
      required: true
    },
    placeholder: 'Last Name',
    maxLength: 50,
    validators: [Validators.required, Validators.maxLength(50)],
    faIcon:'fa-user',
  }, {
    type: 'text',
    name: 'contact_number',
    value: '9876543210',
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
  }
]