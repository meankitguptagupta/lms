import { Validators } from '@angular/forms';

export default [{
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
    type: 'button',
    label: 'Login',
    sideLink:{
      label: 'Forgot Password?',
      anchor: '/forgot-password'
    }
  }
]