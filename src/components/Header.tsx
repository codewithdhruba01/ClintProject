import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { activeSection, setActiveSection, isDarkMode, toggleDarkMode, currentView, setView } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#home') {
      setView('home');
      setActiveSection('home');
      window.scrollTo(0, 0);
    } else if (href === '#contact') {
      setView('contact');
    } else if (href === '#about') {
      setView('about');
    } else if (href === '#works') {
      setView('works');
    } else {
      // For any other hash links, jump to home view first.
      if (currentView !== 'home') {
        setView('home');
        // Small delay to allow home content to render before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setActiveSection(href.slice(1));
    }
  };

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'WORKS', href: '#works' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="header">
      {mobileMenuOpen && (
        <div className="nav-overlay" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
      )}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => handleNavClick('#home')}>
            <img src="/Logo.svg" alt="Anton Photo Logo" width="32" height="32" />
            <span className="logo-text">ANTON PHOTO</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-list ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  className={`nav-btn-link ${ (currentView === 'contact' && item.href === '#contact') || (currentView === 'about' && item.href === '#about') || (currentView === 'works' && item.href === '#works') || (currentView === 'home' && activeSection === item.href.slice(1)) ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
      <style>{`
        .header {
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          background: var(--header-bg);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: var(--transition-smooth);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          flex: 0 0 auto;
        }
        .logo-text {
          font-family: var(--font-primary);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0.5px;
          color: var(--text-color);
          text-transform: uppercase;
        }
        .nav-list {
          display: flex;
          gap: 40px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .nav-list li a, .nav-btn-link {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: var(--transition-smooth);
        }
        .nav-list li a.active, .nav-btn-link.active {
          color: var(--text-color);
        }
        .nav-list li a:hover, .nav-btn-link:hover {
          color: var(--accent-color);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-color);
          cursor: pointer;
          padding: 8px;
        }
        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          transition: var(--transition-smooth);
        }
        .theme-toggle:hover {
          background: var(--border-color);
          color: var(--accent-color);
        }

        @media (max-width: 900px) {
          .nav-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.4);
            z-index: 998;
          }
          .nav-list {
            position: fixed;
            top: 0;
            right: 0;
            width: 280px;
            height: 100vh;
            background: var(--header-bg);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 80px 30px 30px;
            gap: 20px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            z-index: 999;
          }
          .nav-list.open {
            transform: translateX(0);
          }
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .nav-container { padding: 0 16px; }
          .logo-text { font-size: 14px; }
        }
      `}</style>
    </header>
  );
};

export default Header;
