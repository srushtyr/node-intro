const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received from ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log('Some other logic here');
});

customEmitter.emit('response','shiny',24);