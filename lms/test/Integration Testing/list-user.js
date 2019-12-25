const server = require ('../../src/server'),
    chai = require ('chai');

module.exports = (a_token, s_token, student_id, book_id) => {

    it('List User. without Token', (done) => {
        chai.request(server)
        .get('/users')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    it('List User With Student Token', (done) => {
        chai.request(server)
        .get('/users')
        .set('Authorization', s_token)
        .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid access');
            res.body.should.have.property('data');
            res.body.data.should.have.property('role').eql('You are not authorize to access this service');
            done();
        });
    });

    it('List User With admin Token.', (done) => {
        chai.request(server)
        .get('/users')
        .set('Authorization', a_token)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User successfully updated!');
            res.body.should.have.property('data');
            console.log (res.body);
            // res.body.data.should.have.property('book_id').eql(book_id);
            // res.body.data.should.have.property('user_id').eql(student_id);
            // res.body.data.should.have.property('proposed_return_date').eql(proposed_return_date);
            done();
        });
    });
}