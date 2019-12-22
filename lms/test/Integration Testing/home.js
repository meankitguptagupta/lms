const server = require ('../../src/server'),
    chai = require ('chai');

module.exports = () => {
    it('it should check if test are working', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Server running');
            res.body.should.have.property('data');
            done();
        });
    });
}