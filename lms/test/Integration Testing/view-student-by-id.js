const server = require ('../../src/server'),
    chai = require ('chai');

// Test case for Signup API
module.exports = (token, student_id) => {
    
    // no Auth-Token
    it('View Student by ID Without Admin-Token!', (done) => {
        chai.request(server)
        .get('/students/'+student_id)
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // return with success
    it('View Student by ID With Admin-Token!', (done) => {
        chai.request(server)
        .get('/students/'+student_id)
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