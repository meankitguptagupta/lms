const server = require ('../../src/server'),
    chai = require ('chai'),
    faker = require ('faker');

// Test case for Signup API
module.exports = (token) => {
    const profile = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        contact_number: (faker.phone.phoneNumberFormat()).replace (/[^\d]/g, ''),
        address: faker.address.streetName() + faker.address.streetAddress(),
        city: faker.address.city(),
        pincode: (faker.address.zipCode()).substr(0,8)
    };

    // without Token
    it('Update Profile of the User. Without Token!', (done) => {
        chai.request(server)
        .put('/profile')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // without Payload
    it('Update Profile of the User. Without payload!', (done) => {
        chai.request(server)
        .put('/profile')
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            done();
        });
    });

    // return with success
    it('Update Profile of the User. With Token and Payload!', (done) => {
        chai.request(server)
        .put('/profile')
        .set('Authorization', token)
        .send(profile)
        .end((err, res) => {
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User successfully updated!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('user_id');
            res.should.have.status(200);
            done();
        });     
    });
}