const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 4000;
let counterOfConnection = 0;

server.listen(port, () => console.log(`Listening on port ${port}`));

io.on('connection', socket => {
  console.log('New client connected');

  socket.emit('numberOfConnection', `${++counterOfConnection}`);
});
