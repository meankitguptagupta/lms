import { Field } from '../models/field';

export function ManipulateFields(fields:Array<Field>):Array<Object> {

    let result = fields.map((field:Field) => {
        let obj = {};
        obj[field.key] = field.value
        return obj;
    })

    return result;
}