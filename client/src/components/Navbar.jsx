import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2>ChatApp</h2>
    <div>
      <Link to="/chat">Chat</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
);

export default Navbar; 