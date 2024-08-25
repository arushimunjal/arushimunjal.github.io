import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Navbar({ isDarkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <button onClick={setDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;