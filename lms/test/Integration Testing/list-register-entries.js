const server = require ('../../src/server'),
    chai = require ('chai');

module.exports = (token) => {
    it('List register Entries without Token.', (done) => {
        chai.request(server)
        .get('/register')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    it('List register Entries with Admin Token', (done) => {
        chai.request(server)
        .get('/register')
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Register');
            res.body.should.have.property('data');
            res.body.data.should.be.a('array');
            done();
        });
    });
}