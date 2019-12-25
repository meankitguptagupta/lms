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
    it('List books. Without Token!', (done) => {
        chai.request(server)
        .get('/books')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    
    // return with success
    it('List Books with Token.', (done) => {
        chai.request(server)
        .get('/books')
        .set('Authorization', token)
        .send(book)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Books');
            res.body.should.have.property('data');
            done();
        });     
    });
}