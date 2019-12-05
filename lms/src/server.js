const restify = require('restify'),
    server = restify.createServer(),
    port = process.env.PORT || 3000;

server.use(restify.plugins.bodyParser({mapParams: false}));

require ('./app/routes') (server);

server.listen(port, () => {
    console.info (`Server is running on port ${port}`);
});