import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">Portfo<span>lio.</span></a>
          </div>
          <p className="footer-name">John Doe - Web Developer</p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:johndoe@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
