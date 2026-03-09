import React from 'react';
import { useStore } from '../store/useStore';

const Header: React.FC = () => {
  const { activeSection, setActiveSection } = useStore();

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'WORKS', href: '#works' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="header">
      <nav className="nav">
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
      </nav>
      <style>{`
        .header {
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }
        .nav-list {
          display: flex;
          justify-content: center;
          gap: 40px;
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
      `}</style>
    </header>
  );
};

export default Header;
