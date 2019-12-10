/**
 * Method to filter all keys those are require from objet
 * 
 * @param object params
 * @param array find keys from object
 * 
 * @return object|null
 */
module.exports = (obj, arr) => {

    // remove remaining keys
    Object.keys (obj).forEach (key => !arr.includes(key) && delete obj[key])

    // remove empty element from result
    // Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);

    return obj;
}