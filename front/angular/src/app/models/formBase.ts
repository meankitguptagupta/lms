import { ValidatorFn } from '@angular/forms';
import { SelectOption } from './definations/select-option';

export interface FormBase {
    type: string,
    value?: string,
    name: string,
    placeholder: string,
    faIcon: string,
    validators: Array<ValidatorFn>,
    directives?: {
        appNumberOnly?:boolean
    },
    options?:Array<SelectOption>,
    maxLength:number
}