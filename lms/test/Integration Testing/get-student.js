const server = require ('../../src/server'),
    chai = require ('chai');

// Test case for Signup API
module.exports = (token, a_token) => {
    
    // no Auth-Token
    it('Get Student Without Token!', (done) => {
        chai.request(server)
        .get('/students')
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // with admin token
    it('Get Student with Admin-Token.', (done) => {
        chai.request(server)
        .get('/students')
        .set('Authorization', a_token)
        .end((err, res) => {
            console.log (res.body)
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid access');
            res.body.should.have.property('data');
            // res.body.data
            done();
        });
    });

    // return with success
    it('Get Student with Token.', (done) => {
        chai.request(server)
        .get('/students')
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Student profile successfully found!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('student');
            res.body.data.student.should.have.property('guardian_name');
            res.body.data.student.should.have.property('guardian_contact_number');
            res.body.data.student.should.have.property('academy_name');
            res.body.data.student.should.have.property('academy_address');
            res.body.data.student.should.have.property('academy_city');
            res.body.data.student.should.have.property('academy_pincode');
            res.body.data.student.should.have.property('academy_type');
            res.body.data.student.should.have.property('academy_standard');
            res.body.data.student.should.have.property('updated_at');
            done();
        });
    });
}