module.exports = (req, res) => {
    return res.send (200, {status: true, message: 'Server running', data: {}});
}