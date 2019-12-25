const server = require ('../../src/server'),
    chai = require ('chai'),
    faker = require ('faker'),
    generes = require ('../../src/app/enum/genres'),
    academy_type = require ('../../src/app/enum/academic_type'),
    book = {
        tag_id: (faker.random.uuid()).substr(0,10),
        title: (faker.name.jobDescriptor()).substr(0,10),
        genere: generes[Math.floor(Math.random() * generes.length)],
        is_premium: Math.floor(Math.random() * 2) + 0 ,
        academy_type: academy_type[Math.floor(Math.random() * academy_type.length)],
        academy_standard: Math.floor(Math.random() * 6) + 1,
        fields: faker.random.objectElement(),
    };

// Test case for Signup API
module.exports = (token, book_id) => {
    
    // no Auth-Token
    it('Update book. Without Token!', (done) => {
        chai.request(server)
        .put('/books/'+book_id)
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // return with error on tag-id
    it('Update Book withot payload but with Token for tag-only.', (done) => {
        chai.request(server)
        .put('/books/'+book_id)
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Parameters Errors!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('title');
            res.body.data.should.have.property('genere');
            res.body.data.should.have.property('is_premium');
            res.body.data.should.have.property('academy_type');
            res.body.data.should.have.property('academy_standard');
            res.body.data.should.have.property('fields');
            done();
        });     
    });

    
    // return with success
    it('Update Book with payload and with Token.', (done) => {
        chai.request(server)
        .put('/books/'+book_id)
        .set('Authorization', token)
        .send(book)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book successfully update!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('book_id');
            done();
        });     
    });
}