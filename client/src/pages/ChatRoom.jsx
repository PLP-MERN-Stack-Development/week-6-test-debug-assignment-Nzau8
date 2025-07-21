import React, { useEffect, useState, useRef } from 'react';
import socket from '../socket/socket';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState('');
  const room = 'main';
  const user = localStorage.getItem('user') || 'User';
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = socket();
    socketRef.current.emit('joinRoom', { room, user });
    socketRef.current.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    socketRef.current.on('typing', (data) => {
      setTyping(data.user + ' is typing...');
      setTimeout(() => setTyping(''), 1000);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSend = (text) => {
    socketRef.current.emit('sendMessage', { room, user, text });
  };

  const handleTyping = () => {
    socketRef.current.emit('typing', { room, user });
  };

  return (
    <div className="chat-room">
      <ChatWindow messages={messages} />
      <div className="typing-indicator">{typing}</div>
      <MessageInput onSend={handleSend} onTyping={handleTyping} />
    </div>
  );
};

export default ChatRoom; 