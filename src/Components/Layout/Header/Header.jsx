import React, { useState, useEffect } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="headerContainer">
          <Link to="/" className="headerLogo">
            <h2>Farhad.S</h2>
          </Link>

          <div className="mobileMenuToggle">
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={24}
              duration={0.6}
              distance="md"
              color="#ffffff"
              easing="ease-in-out"
              rounded
              label="Show menu"
            />
          </div>
        </div>
      </header>

      <div className={`fullscreenMenu ${isMenuOpen ? 'active' : ''}`}>
        <div className="fullscreenMenuContent">
          <nav className="fullscreenNav">
            <ul className="fullscreenNavList">
              {navItems.map((item, index) => (
                <li key={index} className="fullscreenNavItem">
                  <Link 
                    to={item.href} 
                    className="fullscreenNavLink" 
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
