module.exports = (req, res) => {
    return res.send (200, {status: false, message: 'User Detail', data: req.user});
}