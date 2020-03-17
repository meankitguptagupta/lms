import { Validators } from '@angular/forms';

export const Login = [{
    type: 'text',
    value: 'admin@email.com',
    name: 'email',
    placeholder: 'Email',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.email, Validators.maxLength(191)],
    maxLength:191
}, {
    type: 'password',
    value: '123456',
    name: 'password',
    placeholder: 'Password',
    faIcon: 'lock',
    validators: [Validators.required, Validators.maxLength(191)],
    maxLength:191
}]