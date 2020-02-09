const genres = require('../../enum/genres');

module.exports = (req, res) => {
    return res.send (200, {status: true, message: 'Genres', data: {...genres}}) ;
}