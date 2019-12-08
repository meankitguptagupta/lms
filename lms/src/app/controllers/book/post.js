const addBook = require ('../../repositories/book/create');

module.exports = (req, res) => {
    let book = {
        title: (req.body.title).trim(),
        genere: (req.body.genere).trim(),
        is_premium: parseInt ((req.body.is_premium).trim()),
        academy_type: (req.body.academy_type).trim(),
        academy_standard: parseInt ((req.body.academy_standard).trim()),
        fields: (req.body.fields) ? (req.body.fields).trim() : null,
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