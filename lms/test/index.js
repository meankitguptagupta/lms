//Require the dev-dependencies
const chai = require ('chai'),
    chaiHttp = require ('chai-http'),
    should = chai.should(),
    connection = require ('../database/connection'),
    cases = require ('./Integration Testing/index');

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
    describe('/', () => { cases.home(); });

    // test Signup as Admin
    describe('/signup', () => cases.signup().then((response) => {
        let admin = response.user;
        // login as Admin
        describe('/login', () => cases.login(admin).then (token => {
            // admin Token
            token = token.type + ' ' + token.token;
            
            // check for profile
            describe('/profile', () => cases.profile(token));

            // update profile
            describe('/update-profile', () => cases.profile_put(token));

            // add book
            describe('/add new book', () => cases.addBook(token).then(book_id => {

                // update book
                describe('/update book', () => cases.updateBook(token, book_id));
                
                // list books
                describe('/list books', () => cases.updateBook(token));

                // register student
                describe('/signup', () => cases.signup().then((response) => {
                    let student = response.user,
                        student_id = response.id;

                    // login student
                    describe('/login', () => cases.login(student).then (s_token => {
                        // student Token
                        s_token = s_token.type + ' ' + s_token.token;

                        // update student
                        describe('/update-student', () => cases.updateStudent(s_token, token));

                        // get student
                        describe('/get-student', () => cases.getStudent(s_token, token));

                        // update student status
                        describe('/update-student-student', () => cases.updateStudentStatus(token, student_id));

                        // view student by admin by id
                        describe('/view student by id', () => cases.viewStudentById(token, student_id));

                        // issue a book
                        describe('/Issue Book', () => cases.issueBook(token, s_token, student_id, book_id));

                        // return book
                        describe('/Return Issue Book', () => cases.returnBook(token, s_token, student_id, book_id));

                        // list register entries 
                        describe('/Return Issue Book', () => cases.listRegister(token));

                        // list all user
                        describe('/Return Issue Book', () => cases.listUser(token, s_token));                        
                    }));
                }));
            }));            
        }));
    }));
});