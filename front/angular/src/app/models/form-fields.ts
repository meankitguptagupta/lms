import { ValidatorFn } from '@angular/forms';

export interface FormFields {
    type: string,
    name?: string,
    label?: string,
    value?: string,
    placeholder?: string,
    maxLength?: number,
    validators?: Array<ValidatorFn>,
    faIcon?:string,
    directives?:{
        required?: boolean,
        numberOnly?: boolean,
    }
    sideLink?:{
        label:string,
        anchor:string
    };
}