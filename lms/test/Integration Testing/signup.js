const server = require ('../../src/server'),
    chai = require ('chai'),
    faker = require ('faker');

// Test case for Signup API
module.exports = () => {
    it('Check and validate Signup route. Invalid Contact nnumber format!', (done) => {
        // design request payload for signup post-params
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            contact_number: faker.phone.phoneNumber()
        };

        // send requet as post and append payload
        chai.request(server)
        .post('/signup')
        .send(user)
        .end((err, res) => {
            // check for response-status-code
            res.should.have.status(422);

            // check response type
            res.body.should.be.a('object');

            // check for resposnse properties
            res.body.should.have.property('message').eql('Parameters Errors!');
            res.body.should.have.property('data');

            // callback
            done(null, user);
        });
    });

    it('Check and validate Signup route. Success!', (done) => {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            contact_number: (faker.phone.phoneNumberFormat()).replace (/[^\d]/g, '')
        };
        chai.request(server)
        .post('/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User successfully registered!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('user_id');
            done(user);
        });
    });
}