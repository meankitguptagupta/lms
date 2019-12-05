const controllers = require ('./controllers');

module.exports = (server) => {
    server.get('/', controllers.home);    
    server.post ('/signup', controllers.signup);
}