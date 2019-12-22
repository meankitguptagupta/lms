//Require the dev-dependencies
const chai = require ('chai'),
    chaiHttp = require ('chai-http'),
    should = chai.should(),
    connection = require ('../database/connection'),
    cases = require ('./Automated-testing/index');

chai.use(chaiHttp);

// initialize test
describe('Init', () => {
    // truncate each database before Inititalize
    beforeEach((done) => {
        connection.query("TRUNCATE `users`");
        connection.query("TRUNCATE `user_profile`");
        connection.query("TRUNCATE `students`");
        connection.query("TRUNCATE `books`");
        connection.query("TRUNCATE `register`");
        done();
    })

    // Test home route
    describe('/', () => {
        cases.home();
    });
});