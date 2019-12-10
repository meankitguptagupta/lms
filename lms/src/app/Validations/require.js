/**
 * Method to check if value of an array exists into object
 * 
 * @param object params
 * @param object fields
 * 
 * @return object
 */
module.exports = (params, fields) => {
    let errors = {};

    // check each field into params
    for (field of fields) {
        if (!params.hasOwnProperty (field.key))
            errors[field.key] = `${field.key} require`;
        else if (field.min_length && params[field.key].length < field.min_length)
            errors[field.key] = `${field.key} value cann't be less than ${field.min_length} characters!`;
        else if (field.max_length && params[field.key].length > field.max_length)
            errors[field.key] = `Max length for ${field.key} is ${field.max_length}!`;
    }

    return errors;
}