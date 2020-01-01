import { ValidatorFn } from '@angular/forms';

export interface FormFields {
    type: string;
    name?: string;
    label?: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    maxLength?: number;
    validators?: Array<ValidatorFn>;
    sideLink?:{
        label:string,
        anchor:string
    };
}