import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages }) => (
  <div className="chat-window">
    {messages.map((msg, idx) => (
      <div key={idx} className={`message ${msg.isOwn ? 'own' : ''}`}>
        <span className="user">{msg.user}:</span> <span>{msg.text}</span>
      </div>
    ))}
  </div>
);

export default ChatWindow; 