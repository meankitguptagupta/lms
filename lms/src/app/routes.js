const controllers = require ('./controllers'),
    middleware = require ('./middleware');

module.exports = (server) => {
    server.get('/', controllers.home);    
    server.post ('/signup', middleware.signup, controllers.signup);
}