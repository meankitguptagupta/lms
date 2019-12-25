const server = require ('../../src/server'),
    chai = require ('chai'),
    faker = require ('faker'),
    academy_type = require ('../../src/app/enum/academic_type'),
    student = {
        guardian_name: faker.name.firstName() + ' ' + faker.name.lastName(),
        guardian_contact_number: (faker.phone.phoneNumberFormat()).replace (/[^\d]/g, ''),
        academy_name: faker.name.findName(),
        academy_address: faker.address.streetName() + ' ' + faker.address.streetAddress() + ' ' + faker.address.streetSuffix(),
        academy_city: faker.address.city(),
        academy_pincode: (faker.address.zipCode()).substr(0,8),
        academy_type: academy_type[Math.floor(Math.random() * academy_type.length)],
        academy_standard: Math.floor(Math.random() * 6) + 1
    };

// Test case for Signup API
module.exports = (token, a_token) => {
    
    // no Auth-Token
    it('Update Student Without Token!', (done) => {
        chai.request(server)
        .put('/students')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // with admin token
    it('Update Student with Admin-Token.', (done) => {
        chai.request(server)
        .put('/students')
        .set('Authorization', a_token)
        .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid access');
            res.body.should.have.property('data');
            res.body.data.should.have.property('role').eql('You are not authorize to access this service');
            done();
        });
    });
    
    // return with errors
    it('Update Student with Token but without Payload.', (done) => {
        chai.request(server)
        .put('/students')
        .set('Authorization', token)
        // .send(student)
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Parameters Errors!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('guardian_name').eql('guardian_name require');
            res.body.data.should.have.property('guardian_contact_number').eql('guardian_contact_number require');
            res.body.data.should.have.property('academy_name').eql('academy_name require');
            res.body.data.should.have.property('academy_address').eql('academy_address require');
            res.body.data.should.have.property('academy_city').eql('academy_city require');
            res.body.data.should.have.property('academy_pincode').eql('academy_pincode require');
            res.body.data.should.have.property('academy_type').eql('academy_type require');
            res.body.data.should.have.property('academy_standard').eql('academy_standard require');
            done();
        });
    });

    // return with success
    it('Update Student with Token but With Payload.', (done) => {
        chai.request(server)
        .put('/students')
        .set('Authorization', token)
        .send(student)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Student profile successfully updated!');
            res.body.should.have.property('data');
            done();
        });
    });
}