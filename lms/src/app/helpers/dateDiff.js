/**
 * Method to calculate date difference
 * 
 * @param string date_compare_with
 * @param string|null date_compared
 * @param string response_unit
 * 
 * @return int
 */
module.exports = (date_compare_with, date_compared = null, response_unit = 'day') => {
    date_compared = date_compared ? new Date(date_compared) : new Date();
    date_compare_with = new Date(date_compare_with);
    let diff = date_compare_with.getTime() - date_compared.getTime();

    switch (response_unit.toLowerCase()) {
        case 'week':
            return Math.ceil(diff/(7*24*60*60*1000));
        case 'day':
            return Math.ceil(diff/(24*60*60*1000));
        case 'hour':
            return Math.ceil(diff/(60*60*1000));
        case 'minute':
            return Math.ceil(diff/(60*1000));
    }
}