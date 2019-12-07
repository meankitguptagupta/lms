const restify = require('restify'),
    server = restify.createServer(),
    port = process.env.PORT || 3000,
    passport = require ('passport');

server.use(restify.plugins.bodyParser({mapParams: false}));

// validate passport authentication
require('./passport')(passport);
server.use(passport.initialize());

require ('./app/routes') (server, passport);

server.listen(port, () => {
    console.info (`Server is running on port ${port}`);
});