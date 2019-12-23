const server = require ('../../src/server'),
    chai = require ('chai'),
    faker = require ('faker');

// Test case for Signup API
module.exports = (token) => {

    // no Auth-Token
    it('Get Profile of the User. Without Token!', (done) => {
        chai.request(server)
        .get('/profile')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // return with success
    it('Get Profile of the User. With Token!', (done) => {
        chai.request(server)
        .get('/profile')
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User Detail');
            res.body.should.have.property('data');
            res.body.data.should.have.property('id');
            res.body.data.should.have.property('email');
            res.body.data.should.have.property('role');
            res.body.data.should.have.property('status');
            res.body.data.should.have.property('created_at');
            res.body.data.should.have.property('first_name');
            res.body.data.should.have.property('last_name');
            res.body.data.should.have.property('contact_number');
            res.body.data.should.have.property('address');
            res.body.data.should.have.property('city');
            res.body.data.should.have.property('pincode');
            done();
        });     
    });
}