const patchStudentStatus = require ('../../repositories/student/patch');

module.exports = (req, res) => {
    patchStudentStatus (req.params.user_id, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: err}}) ;

        // send success
        return res.send (200, {status: true, message: 'Student Status successfully toggled!', data: {user_id: req.params.user_id} });
    })
}