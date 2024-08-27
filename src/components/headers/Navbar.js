import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/icons/logo.png'; // Adjust the path according to your project structure
import '../../App.css';

function Navbar({ isDarkMode, setDarkMode }) {
  const handleToggle = () => setDarkMode(!isDarkMode);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <Link to="/">home</Link>
        <Link to="/about">about me</Link>
        <Link to="/projects">what i do</Link>
        <Link to="/photography">photography</Link>
      </div>
      <div className="navbar-right">
        <input 
          type="checkbox" 
          id="darkModeToggle" 
          className="toggle" 
          checked={isDarkMode} 
          onChange={handleToggle} 
        />
        <label htmlFor="darkModeToggle"></label>
      </div>
    </nav>
  );
}

export default Navbar;
