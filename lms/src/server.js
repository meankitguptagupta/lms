const restify = require('restify'),
    server = restify.createServer(),
    port = process.env.PORT || 3000,
    passport = require ('passport');

server.pre((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if(req.method === 'OPTIONS') // if is preflight(OPTIONS) then response status 204(NO CONTENT)
        return res.send(204);
    
    next();    
});

server.use(restify.plugins.bodyParser({mapParams: false}));

// validate passport authentication
require('./passport')(passport);
server.use(passport.initialize());

require ('./app/routes') (server, passport);

server.listen(port, () => {
    console.info (`Server is running on port ${port}`);
});