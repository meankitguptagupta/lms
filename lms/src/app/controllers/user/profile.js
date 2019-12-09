module.exports = (req, res) => {
    return res.send (500, {status: false, message: 'Database Error', data: req.user});
}