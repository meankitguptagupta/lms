import { Validators } from '@angular/forms';
import { SelectOption } from '../models/definations/select-option';

export const Book = (generes:Array<SelectOption>, academyTypes:Array<SelectOption>) => [{
    type: 'text',
    value: null,
    name: 'tag_id',
    placeholder: 'Tag Id (Unique)',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.maxLength(10)],
    maxLength:10
}, {
    type: 'text',
    value: null,
    name: 'title',
    placeholder: 'Title',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.maxLength(50)],
    maxLength:50
}, {
    type: 'select',
    value: null,
    name: 'genere',
    placeholder: 'Genere',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.maxLength(50)],
    maxLength:50,
    options: generes
}, {
    type: 'select',
    value: null,
    name: 'academy_type',
    placeholder: 'Academy Type',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.maxLength(50)],
    maxLength:50,
    options: academyTypes
}, {
    type: 'text',
    value: null,
    name: 'academy_standard',
    placeholder: 'Academy Standard',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.maxLength(2)],
    directives:{
        appNumberOnly:true
    },
    maxLength:2,
}, 
// {
//     type: 'checkbox',
//     value: true,
//     name: 'is_premium',
//     placeholder: 'is premium',
//     faIcon: 'envelope',
//     validators: [],
//     maxLength:1,
// }, 
{
    type: 'fields',
    value: null,
    name: 'fields',
    placeholder: 'fields',
    faIcon: 'envelope',
    validators: [],
    maxLength:2,
}]
