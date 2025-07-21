import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const socket = () => {
  const token = localStorage.getItem('token');
  return io(URL, {
    auth: { token },
    transports: ['websocket'],
  });
};

export default socket; 