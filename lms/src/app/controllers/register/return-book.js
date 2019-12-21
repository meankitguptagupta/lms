const returnBook = require ('../../repositories/register/return-book'),
    getParams = require ('../../helpers/getParams'),
    filterObj = require ('../../helpers/filterObj'),
    filterParams = require ('../../helpers/filterParams'),
    registerExists = require ('../../repositories/register/exists');

module.exports = (req, res) => {
    let register = filterObj (filterParams (getParams(req), [
        'book_id', 'user_id'
    ]));

    // check if register exists
    registerExists (register, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}});

        // check if record does not exists
        if (!result[0])
            return res.send (404, {status: false, message: 'Invalid Entry', data: {error: 'Invalid Register Entry!'}});

        // check if book already returned
        if (result[0].return_date)
            return res.send (208, {status: true, message: 'Book already returned.', data: register});

        // return the book
        returnBook (register, (err, result, fields) => {
            // check if db error exists
            if (err) 
                return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

                // return success
                return res.send (200, {status: true, message: 'Book successfully returned!', data: register});
        });
    })
}