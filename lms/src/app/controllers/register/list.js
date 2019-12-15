const list = require ('../../repositories/register/list');

module.exports = (req, res) => {

    // check of tag-id exists
    list ((err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: 'Internal server Error'}}) ;

        // return success
        return res.send (200, {status: true, message: 'Register', data: result});
    });
}