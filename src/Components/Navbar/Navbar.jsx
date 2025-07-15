import './Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on nav link click (mobile)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className={`navbar1 ${scrolled ? 'scrolled' : ''}`}>
        <span className="navbar-name">Lovish Mehra</span>
        <button className="hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#certificate" onClick={handleNavClick}>Certificates</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;