import { ValidatorFn } from '@angular/forms';

export interface FormBase {
    type: string,
    value?: string,
    name: string,
    placeholder: string,
    faIcon: string,
    validators: Array<ValidatorFn>,
    directives?: {
        appNumberOnly?:boolean
    }
}