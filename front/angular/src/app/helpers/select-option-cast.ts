import { SelectOption } from '../models/definations/select-option';

export function selectOptionCasting(values:Array<string>):SelectOption[] {
    return values.map(val => {
        return {key: val, value: val};
    })
}