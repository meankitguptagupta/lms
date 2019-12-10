const updateBook = require ('../../repositories/book/update'),
    getParams = require ('../../helpers/getParams'),
    filterParams = require ('../../helpers/filterParams'),
    filterObj = require ('../../helpers/filterObj');

module.exports = (req, res) => {
    let book = filterObj (filterParams (getParams(req), [
            'title', 'genere', 'is_premium',
            'academy_type', 'academy_standard', 'fields'
        ]));

    // save book into DB
    updateBook (req.params.book_id, book, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // return success
        return res.send (200, {status: true, message: 'Book successfully update!', data: {book_id: req.params.book_id}});
    });
}