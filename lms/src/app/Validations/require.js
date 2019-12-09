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
        else if (!params[field.key].length)
            errors[field.key] = `${field.key} value cann't be empty!`;
        else if (field.length && params[field.key].length > field.length)
            errors[field.key] = `Max length for ${field.key} is ${field.length}!`;
    }

    return errors;
}