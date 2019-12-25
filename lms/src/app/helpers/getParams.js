/**
 * Method to get params on basis of method
 * 
 * @param Request req
 * 
 * @return object|null
 */
module.exports = (req) => {
    let fields = {};

    switch ((req.method).toString().toUpperCase()) {
        case 'POST':
        case 'PUT':
            req.body ? Object.keys(req.body).map(key => { fields[key] = (typeof req.body[key] === 'string') ? req.body[key].trim() : req.body[key] }) : {};
            return fields;
        case 'GET':
            req.params ? Object.keys(req.params).map(key => { fields[key] = (typeof req.body[key] === 'string') ? req.params[key].trim() : req.params[key] }) : {};
            return fields;
    }

    return fields;
}