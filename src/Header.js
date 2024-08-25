import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>hi there! i'm <span className="name-highlight">Arushi Munjal</span></h1>
      <p className="subtitle">
        a <span className="role-highlight">full-stack developer</span> who loves building friendly products for <span className="highlight">all</span>
      </p>
      <div className="buttons">
        <button className="button">about me →</button>
        <button className="button">what i do →</button>
      </div>
    </header>
  );
};

export default Header;