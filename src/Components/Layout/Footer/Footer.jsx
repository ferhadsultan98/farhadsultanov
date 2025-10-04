// Footer.jsx
import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram
} from 'react-icons/fa';
import { 
  HiMail, 
  HiChevronUp 
} from 'react-icons/hi';
import './Footer.scss';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: FaLinkedin },
    { name: 'Instagram', url: 'https://instagram.com', icon: FaInstagram }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footerContainer">
        
        {/* Full-width Brand Name at the Top */}
        <div className="footerTopBrand">
          <h3>Farhad.S</h3>
          <p className="footerDescription">
            Frontend Developer passionate about creating beautiful and functional web experiences.
          </p>
        </div>

        <div className="footerContent">
          {/* Socials */}
          <div className="footerSection brandSection">
            {/* Social Links */}
            <div className="socialLinks">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.url}
                    className="socialLink"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="socialIcon" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footerSection linksSection">
            <h4 className="sectionTitle">Navigation</h4>
            <ul className="linksList">
              {quickLinks.map((link, index) => (
                <li key={index} className="linkItem">
                  <a href={link.href} className="footerLink">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footerSection contactSection">
            <h4 className="sectionTitle">Let's Connect</h4>
            <div className="contactInfo">
              <a href="mailto:hello@devportfolio.com" className="contactLink">
                <HiMail className="contactIcon" />
                hello@devportfolio.com
              </a>
            </div>
            <div className="ctaSection">
              <a href="#contact" className="ctaButton">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="bottomContent">
            <div className="copyrightSection">
              <span className="copyright">
                © {currentYear}Portfolio Website Designed & Built with passion.
              </span>
            </div>
            <button 
              onClick={scrollToTop}
              className="backToTop"
              aria-label="Back to top"
            >
              <HiChevronUp className="backToTopIcon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
