const restify = require('restify'),
    server = restify.createServer(),
    port = process.env.PORT || 3000;

require ('./app/routes') (server);

restify.listen(port, () => {
    console.info (`Server is running on port ${port}`);
});