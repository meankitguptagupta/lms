import { Field } from '../models/field';

export function ManipulateFields(fields:Array<Field>):Object {
    let result = {}
    for (let field of fields) {
        result[field.key] = field.value
    }

    return result;
}