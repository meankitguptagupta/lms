const server = require ('../../src/server'),
    chai = require ('chai'),
    faker = require ('faker');

// Test case for Signup API
module.exports = (user) => {

    // no Parameters
    it('Check and validate Login route. No parameters!', (done) => {
        chai.request(server)
        .post('/login')
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Parameters Errors!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('email').eql('email require');
            res.body.data.should.have.property('password').eql('password require');
            done();
        });
    });

    // invalid Email
    it('Check and validate Login route. Invalid Parameters!', (done) => {
        const fake_user = {
            email: faker.internet.email(),
            password: faker.internet.password()
        };
        
        chai.request(server)
        .post('/login')
        .send(fake_user)
        .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User not found!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('email').eql('Email not found!');
            done();
        });
    });

    // invalid Password
    it('Check and validate Login route. Invalid Parameters!', (done) => {
        const fake_user = {
            email: user.email,
            password: faker.internet.password()
        };
        
        chai.request(server)
        .post('/login')
        .send(fake_user)
        .end((err, res) => {
            res.should.have.status(422);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid  password');
            res.body.should.have.property('data');
            res.body.data.should.have.property('password').eql('Invalid password!');
            done();
        });
    });

    // return with success
    return new Promise (resolve => {
        it('Check and validate Login route. Success!', (done) => {
            chai.request(server)
            .post('/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Login successful');
                res.body.should.have.property('data');
                res.body.data.should.have.property('type');
                res.body.data.should.have.property('token');
                resolve (res.body.data);
                done();
            });
        });
    })
}