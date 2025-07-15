import './Footer.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="simple-footer">
      <div className="footer-content-centered">
        <p className="footer-copyright">
          © {currentYear} Lovish Mehra. All rights reserved.
        </p>
        <div className="footer-social-row">
          <a href="mailto:lovishmehra798@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/lovish-mehra-634811323/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Lovishmehra" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 