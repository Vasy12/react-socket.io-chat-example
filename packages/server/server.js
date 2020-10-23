const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const io = require('socket.io')(server);
const { Message } = require('./models');
io.on('connect', onConnectHandler);

const CHAT_EVENT = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR',
};

function onConnectHandler(socket) {
  try {
    socket.on(CHAT_EVENT.NEW_MESSAGE, async data => {
      try {
        const parsedData = JSON.parse(data);
        const createdMessageInstance = await Message.create(parsedData);

        const newMessageDataJSON = JSON.stringify(createdMessageInstance);
        io.emit(CHAT_EVENT.NEW_MESSAGE, newMessageDataJSON); // send to all
      } catch (err) {
        socket.emit(CHAT_EVENT.NEW_MESSAGE_ERROR, JSON.stringify(err));
      }
    });
  } catch (err) {
    console.error(err);
  }
}

server.listen(5000);
