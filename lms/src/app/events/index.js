const events = require('events'),
    eventEmitter = new events.EventEmitter();

    // require ('./userRegistered')

//Assign the event handler to an event:
eventEmitter.on('userRegistered', require ('./userRegistered'));

module.exports = eventEmitter;