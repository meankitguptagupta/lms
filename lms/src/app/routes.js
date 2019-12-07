const controllers = require ('./controllers'),
    middleware = require ('./middleware');

module.exports = (server, passport) => {
    server.get('/', controllers.home);    
    server.post ('/signup', middleware.signup, controllers.signup);
    server.post ('/login', middleware.login, controllers.login);
    server.get ('/profile', passport.authenticate('jwt', {session: false}), controllers.profile);

    // book
    server.post ('/books', passport.authenticate('jwt', {session: false}), middleware.allowRole (['admin']), middleware.postBooks, controllers.books.add);
}