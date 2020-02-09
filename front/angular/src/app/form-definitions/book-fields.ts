import { Validators } from '@angular/forms';

export const BookFields = [{
    type: 'text',
    value: null,
    name: 'tag_id',
    placeholder: 'Tag ID',
    faIcon: 'thumb-tack',
    validators: [Validators.required, Validators.maxLength(10)]
},{
    type: 'text',
    value: null,
    name: 'title',
    placeholder: 'Title',
    faIcon: 'address-card',
    validators: [Validators.required, Validators.maxLength(50)]
},{
    type: 'text',
    value: null,
    name: 'genere',
    placeholder: 'Genere',
    faIcon: 'envelope',
    validators: [Validators.required, Validators.maxLength(50)]
}]