const server = require ('../../src/server'),
    chai = require ('chai');

module.exports = (a_token, s_token, student_id, book_id) => {

    const register = {
            book_id: book_id,
            user_id: student_id,
        };

    it('Return Issue Book. without Token', (done) => {
        chai.request(server)
        .put('/register')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    it('Return Issue Book. With Student Token', (done) => {
        chai.request(server)
        .put('/register')
        .set('Authorization', s_token)
        .send(register)
        .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid access');
            res.body.should.have.property('data');
            res.body.data.should.have.property('role').eql('You are not authorize to access this service');
            done();
        });
    });

    it('Return Issue Book. With admin Token Without Payload', (done) => {
        chai.request(server)
        .put('/register')
        .set('Authorization', a_token)
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Parameters Errors!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('book_id').eql('book_id require');
            res.body.data.should.have.property('user_id').eql('user_id require');
            done();
        });
    });

    it('Return Issue Book. With admin Token With Payload', (done) => {
        chai.request(server)
        .put('/register')
        .send(register)
        .set('Authorization', a_token)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book successfully returned!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('book_id').eql(book_id);
            res.body.data.should.have.property('user_id').eql(student_id);
            done();
        });
    });
}