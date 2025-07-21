import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import { Login, Register, ChatRoom } from './pages';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<ChatRoom />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default App; 