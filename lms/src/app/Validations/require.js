/**
 * Method to check if value of an array exists into object
 * 
 * @param object params
 * @param object fields
 * 
 * @return array
 */
module.exports = (params, fields) => {
    let errors = [];

    // check each field into params
    for (field of fields) {
        if (!params.hasOwnProperty (field.key))
            errors.push (`${field.key} require`)
        else if (!params[field.key].length)
            errors.push (`${field.key} value cann't be empty!`)
        else if (field.length && params[field.key].length > field.length)
            errors.push (`Max length for ${field.key} is ${field.length}!`)
    }

    return errors;
}