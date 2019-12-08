const listBook = require ('../../repositories/book/list');

module.exports = (req, res) => {
    // save book into DB
    listBook ((err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {}}) ; 

        // return success
        return res.send (200, {status: true, message: 'Books', data: result });
    })
    
}