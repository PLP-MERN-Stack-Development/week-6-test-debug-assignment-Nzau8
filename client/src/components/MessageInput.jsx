import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSend, onTyping }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
    if (onTyping) onTyping();
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form className="message-input" onSubmit={handleSend}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput; 