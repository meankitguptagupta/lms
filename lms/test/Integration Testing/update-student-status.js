const server = require ('../../src/server'),
    chai = require ('chai');

// Test case for Signup API
module.exports = (token, student_id) => {
    
    // no Auth-Token
    it('Update Student Status Without Token!', (done) => {
        chai.request(server)
        .patch('/students/'+student_id)
        .end((err, res) => {
            res.should.have.status(401);
            res.text.should.be.a('string');
            res.text.should.be.eql('Unauthorized');
            done();
        });
    });

    // return with success
    it('Update Student Status with Token.', (done) => {
        chai.request(server)
        .patch('/students/'+student_id)
        .set('Authorization', token)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Student Status successfully toggled!');
            res.body.should.have.property('data');
            res.body.data.should.have.property('user_id');            
            done();
        });
    });
}