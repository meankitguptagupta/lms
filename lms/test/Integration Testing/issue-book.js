const server = require ('../../src/server'),
    chai = require ('chai');

module.exports = (a_token, s_token, student_id, book_id) => {
    let today = new Date(),
        proposed_return_date = today.setDate(today.getDate() + 8);
    
    proposed_return_date = new Date(proposed_return_date);
    proposed_return_date = proposed_return_date.getFullYear() + '-' + ('0' + (proposed_return_date.getMonth()+1)).substr(-2) + '-' + ('0' + proposed_return_date.getDate()).substr(-2);

    const register = {
            book_id: book_id,
            user_id: student_id,
            proposed_return_date: proposed_return_date
        };

    it('Issue Book. without Token', (done) => {
        chai.request(server)
        .post('/register')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    it('Issue Book. With Student Token', (done) => {
        chai.request(server)
        .post('/register')
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

    it('Issue Book. With admin Token Without Payload', (done) => {
        chai.request(server)
        .post('/register')
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

    it('Issue Book. With admin Token With Payload', (done) => {
        chai.request(server)
        .post('/register')
        .send(register)
        .set('Authorization', a_token)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book successfully issue!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('book_id').eql(book_id);
            res.body.data.should.have.property('user_id').eql(student_id);
            res.body.data.should.have.property('proposed_return_date').eql(proposed_return_date);
            done();
        });
    });
}