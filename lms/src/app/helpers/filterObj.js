/**
 * Method to filter object by eleminae null, undefined, empty values of the keys
 * 
 * @param object params
 * 
 * @return object|null
 */
module.exports = (obj) => {
    // remove empty element from result
    Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);

    return obj;
}