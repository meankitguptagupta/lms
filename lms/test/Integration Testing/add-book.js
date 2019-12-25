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
module.exports = (token) => {
    
    // no Auth-Token
    it('Add new book. Without Token!', (done) => {
        chai.request(server)
        .post('/books')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // return with error on tag-id
    it('Add New Book withot payload but with Token for tag-only.', (done) => {
        chai.request(server)
        .post('/books')
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Parameters Errors!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('tag_id').eql('tag_id require');
            done();
        });     
    });

    // return with success
    return new Promise(resolve => {
        // return with success
        it('Add New Book with payload and with Token.', (done) => {
            chai.request(server)
            .post('/books')
            .set('Authorization', token)
            .send(book)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Book successfully saved!');
                res.body.should.have.property('data');
                res.body.data.should.have.property('book_id');
                resolve(res.body.data.book_id);
                done();
            });     
        });
    })
}