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
            req.body ? Object.keys(req.body).map(key => { fields[key] = req.body[key].trim()} ) : {};
            return fields;
        case 'GET':
            req.params ? Object.keys(req.params).map(key => { fields[key] = req.params[key].trim()} ) : {};
            return fields;
    }

    return fields;
}