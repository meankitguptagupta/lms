const addBook = require ('../../repositories/book/create'),
    getParams = require ('../../helpers/getParams');

module.exports = (req, res) => {
    let params = getParams(req);

    let book = {
        title: params.title,
        genere: params.genere,
        is_premium: parseInt (params.is_premium),
        academy_type: params.academy_type,
        academy_standard: parseInt (params.academy_standard),
        fields: params.fields ? params.fields : null,
    }

    // save book into DB
    addBook (book, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {}}) ; 

        // return success
        return res.send (200, {status: true, message: 'Book successfully saved!', data: {book_id: result.insertId}});
    })
    
}