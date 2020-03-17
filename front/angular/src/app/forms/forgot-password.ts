import { Validators } from '@angular/forms';

export const ForgotPassword = [{
    type: 'text',
    value: null,
    name: 'email',
    placeholder: 'Email',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.email, Validators.maxLength(191)],
    maxLength:191
}]