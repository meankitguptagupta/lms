import { Validators } from '@angular/forms';

export const LoginFields = [{
    type: 'text',
    value: null,
    name: 'email',
    placeholder: 'Email',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.email, Validators.maxLength(191)]
}, {
    type: 'password',
    value: null,
    name: 'password',
    placeholder: 'Password',
    faIcon: 'lock',
    validators: [Validators.required, Validators.maxLength(191)]
}]