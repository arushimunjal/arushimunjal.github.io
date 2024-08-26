import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/icons/logo.png'; // Adjust the path according to your project structure
import '../../App.css';

function Navbar({ isDarkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <Link to="/">home</Link>
        <Link to="/about">about me</Link>
        <Link to="/projects">projects</Link>
        <Link to="/projects">research</Link>
        <Link to="/projects">photography</Link>
      </div>
      <div className="navbar-right">
        <button className="toggle-dark-mode" onClick={setDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
