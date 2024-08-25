function Header() {
    return (
      <header className="header">
        <div className="logo">
          {/* Add your logo image or text here */}
          <img src="assets/arushi.png" alt="Logo" />
        </div>
        <nav className="navigation">
          <a href="#home">home</a>
          <a href="#about">about me</a>
          <a href="#work">what i do</a>
        </nav>
        <div className="toggle-button">
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </header>
    );
  }
  
  export default Header;