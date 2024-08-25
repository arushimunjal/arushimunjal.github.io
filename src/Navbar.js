import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🌸</div>
      <ul className="nav-links">
        <li><a href="#home">home</a></li>
        <li><a href="#about">about me</a></li>
        <li><a href="#what-i-do">what i do</a></li>
      </ul>
      <div className="toggle-switch">
        {/* Add switch functionality here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;