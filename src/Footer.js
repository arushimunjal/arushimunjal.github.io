import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h4>let's connect</h4>
      <div className="social-icons">
        <a href="https://github.com/arushimunjal" target="_blank" rel="noopener noreferrer"><img src="assets/github_icon.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/arushi-munjal/" target="_blank" rel="noopener noreferrer"><img src="assets/linkedin_icon.png" alt="LinkedIn" /></a>
        <a href="mailto:amunjal@ucsd.edu"><img src="email_icon.png" alt="Email" /></a>
        <a href="https://open.spotify.com/user/arushimunjal?si=55d2997e4dac41dd" target="_blank" rel="noopener noreferrer"><img src="spotify-icon.png" alt="Spotify" /></a>
      </div>
      <p>built in react.js and designed by arushi</p>
    </footer>
  );
};

export default Footer;