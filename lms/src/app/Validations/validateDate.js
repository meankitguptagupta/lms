/**
 * Method to validate Date in Y-m-d format
 */
module.exports = (dateStr, format = 'Y-m-d') => {
    let regexp = /^\d{4}-\d{2}-\d{2}/;
    return regexp.match (dateStr);
}