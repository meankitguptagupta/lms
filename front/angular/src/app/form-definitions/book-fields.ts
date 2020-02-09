import { Validators } from '@angular/forms';

export const BookFields = (genres:Array<string>,
        academyTypes:Array<string>,
        genre:string = null,
        academy_types:string = null
) => [{
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
    type: 'select',
    value: genre,
    name: 'genere',
    placeholder: 'Genere',
    faIcon: 'tag',
    validators: [Validators.required, Validators.maxLength(50)],
    options: genres
}, {
    type: 'checkbox',
    value: null,
    name: 'is_premium',
    placeholder: 'Is Premium',
    faIcon: 'bell',
    validators: []
}, {
    type: 'select',
    value: academy_types,
    name: 'academy_type',
    placeholder: 'Academy Type',
    faIcon: 'graduation-cap',
    validators: [Validators.required, Validators.maxLength(50)],
    options: academyTypes
}, {
    type: 'text',
    value: null,
    name: 'academy_standard',
    placeholder: 'Academy Standard (number)',
    faIcon: 'graduation-cap',
    validators: [Validators.required, Validators.maxLength(2)],
    directives:{
        appNumberOnly:true
    }
}]