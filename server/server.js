require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const socketHandler = require('./socket/socket');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: '*' },
});

connectDB();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);

socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 