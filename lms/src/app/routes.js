const controllers = require ('./controllers'),
    middleware = require ('./middleware');

module.exports = (server, passport) => {
    server.get('/', controllers.home);    
    server.post ('/signup', middleware.signup, controllers.signup);
    server.post ('/login', middleware.login, controllers.login);

    // user
    server.get ('/profile', passport.authenticate('jwt', {session: false}), controllers.user.profile);
    server.put ('/profile', passport.authenticate('jwt', {session: false}), middleware.user.update, controllers.user.update);

    // book
    server.post ('/books', passport.authenticate('jwt', {session: false}), middleware.allowRole (['admin']), middleware.book.tag, middleware.book.post, controllers.books.add);
    server.get ('/books', passport.authenticate('jwt', {session: false}), controllers.books.list);
    server.put ('/books/:book_id', passport.authenticate('jwt', {session: false}), middleware.allowRole (['admin']), middleware.book.post, controllers.books.update);

    // student
    server.get ('/students', passport.authenticate('jwt', {session: false}), middleware.allowRole (['student']), controllers.student.view);
    server.put ('/students', passport.authenticate('jwt', {session: false}), middleware.allowRole (['student']), middleware.student.update, controllers.student.update);
    server.get ('/students/:user_id', passport.authenticate('jwt', {session: false}), middleware.allowRole (['admin']), controllers.student.view);
    server.patch ('/students/:user_id', passport.authenticate('jwt', {session: false}), middleware.allowRole (['admin']), controllers.student.patch);

    server.get ('/users', passport.authenticate('jwt', {session: false}), middleware.allowRole (['admin']), controllers.user.list);

    server.post ('/register', passport.authenticate ('jwt', {session: false}), middleware.allowRole(['admin']), middleware.register.post, middleware.register.validateDate, controllers.register.post);
    server.put ('/register', passport.authenticate ('jwt', {session: false}), middleware.allowRole(['admin']), middleware.register.post, controllers.register.returnBook);
    server.get ('/register', passport.authenticate ('jwt', {session: false}), middleware.allowRole(['admin']), controllers.register.list);

    // these routes are publically accessible
    server.get('/genere', controllers.genres),
    server.get('/academy_types', controllers.academic_types),
    server.get('/roles', controllers.roles)
}