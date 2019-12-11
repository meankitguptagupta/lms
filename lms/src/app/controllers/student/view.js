const view = require ('../../repositories/student/view');

module.exports = (req, res) => {
    let student_id = req.user.role === 'admin' ? req.params.user_id : req.user.id;
    view (student_id, (err, result, fields) => {
        // check if db error exists
        if (err) 
            return res.send (500, {status: false, message: 'Database Error', data: {error: err}}) ;

        // send success
        return res.send (200, {status: true, message: 'Student profile successfully found!', data: {student: result[0]} });
    })
}