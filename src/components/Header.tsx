import React from 'react';
import { useStore } from '../store/useStore';
import { Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const { activeSection, setActiveSection, isDarkMode, toggleDarkMode } = useStore();

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'WORKS', href: '#works' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={activeSection === item.href.slice(1) ? 'active' : ''}
                  onClick={() => setActiveSection(item.href.slice(1))}
                >
                  {item.name}
                </a>
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
        .nav-list {
          display: flex;
          gap: 40px;
          flex: 1;
          justify-content: center;
        }
        .nav-list li a {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .nav-list li a.active {
          color: var(--text-color);
        }
        .nav-list li a:hover {
          color: var(--accent-color);
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
      `}</style>
    </header>
  );
};

export default Header;
