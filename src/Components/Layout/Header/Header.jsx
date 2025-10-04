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

  const navItems = [
    { name: 'About', href: '/about' },          // "/" əlavə edildi
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' }, // "Experiences" yerinə "Experience"
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }        // "/" əlavə edildi
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="headerContainer">
        <Link to="/" className="headerLogo">
          <h2>Farhad.S</h2>
        </Link>

        <nav className={`headerNav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navList">
            {navItems.map((item, index) => (
              <li key={index} className="navItem">
                <Link to={item.href} className="navLink" onClick={handleNavClick}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobileMenuToggle">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={22}
            duration={0.6}
            distance="md"
            color="#cccccc"
            easing="ease-in-out"
            rounded
            label="Show menu"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
