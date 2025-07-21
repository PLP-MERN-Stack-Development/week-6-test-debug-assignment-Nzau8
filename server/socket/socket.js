const Message = require('../models/Message');
const jwt = require('jsonwebtoken');

function socketHandler(io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('No token'));
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return next(new Error('Invalid token'));
      socket.user = decoded;
      next();
    });
  });

  io.on('connection', (socket) => {
    socket.on('joinRoom', ({ room, user }) => {
      socket.join(room);
      socket.to(room).emit('message', { user: 'System', text: `${user} joined the room` });
    });

    socket.on('sendMessage', async ({ room, user, text }) => {
      const message = new Message({ room, user, text });
      await message.save();
      io.to(room).emit('message', { user, text });
    });

    socket.on('typing', ({ room, user }) => {
      socket.to(room).emit('typing', { user });
    });
  });
}

module.exports = socketHandler; 