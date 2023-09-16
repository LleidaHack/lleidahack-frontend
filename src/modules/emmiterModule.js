const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const mostrarPopupHandler  = () => {
  eventEmitter.emit('mostrarPopup', true);
};

module.exports = { mostrarPopupHandler , eventEmitter };