import { Validators } from '@angular/forms';
import { ContactNumberValidation } from '../validators/contact-number-validation';

export const SignupFields = [{
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
}, {
    type: 'text',
    value: null,
    name: 'first_name',
    placeholder: 'First Name',
    faIcon: 'user',
    validators: [Validators.required, Validators.maxLength(50)]
}, {
    type: 'text',
    value: null,
    name: 'last_name',
    placeholder: 'Last Name',
    faIcon: 'user',
    validators: [Validators.required, Validators.maxLength(50)]
}, {
    type: 'text',
    value: null,
    name: 'contact_number',
    placeholder: 'Contact Number',
    faIcon: 'phone',
    validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        ContactNumberValidation.contactNumber
    ],
    directives:{
        appNumberOnly:true
    }
}]