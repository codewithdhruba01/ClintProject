import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">ANTON<br />PHOTO</div>
            <p>ESTABLISHED IN 2022 BY ANTON PHILIP JUNIOR PHOTOGRAPHER</p>
          </div>
          <div className="footer-nav">
             <h4>FOLLOW</h4>
             <ul className="social-links">
               <li><a href="#">TWITTER <ArrowUpRight className="link-icon" size={14} /></a></li>
               <li><a href="#">INSTAGRAM <ArrowUpRight className="link-icon" size={14} /></a></li>
               <li><a href="#">FACEBOOK <ArrowUpRight className="link-icon" size={14} /></a></li>
               <li><a href="#">DRIBBBLE <ArrowUpRight className="link-icon" size={14} /></a></li>
               <li><a href="#">BEHANCE <ArrowUpRight className="link-icon" size={14} /></a></li>
             </ul>
          </div>
          <div className="footer-nav">
             <h4>NAVIGATION</h4>
             <ul>
               <li><a href="#">HOME</a></li>
               <li><a href="#">PORTFOLIO</a></li>
               <li><a href="#">SERVICES</a></li>
               <li><a href="#">JOURNAL</a></li>
               <li><a href="#">CONTACT</a></li>
             </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 ANTON PHOTO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
      <style>{`
        .footer {
          background-color: var(--bg-color);
          color: var(--text-color);
          padding-top: 60px;
          border-top: 1px solid var(--border-color);
        }
        .footer-contact-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 0;
          border-top: 1px solid #222;
          border-bottom: 1px solid #222;
        }
        .footer-email {
          font-size: clamp(30px, 8vw, 80px);
          font-family: var(--font-primary);
          font-weight: 900;
        }
        .footer-label {
          font-size: 11px;
          opacity: 0.6;
        }
        .footer-main {
          padding: 60px 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
        }
        .footer-logo {
          font-size: 40px;
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 20px;
        }
        .footer-brand p {
          font-size: 11px;
          max-width: 250px;
          opacity: 0.6;
        }
        .footer-nav h4 {
          font-size: 12px;
          margin-bottom: 20px;
          opacity: 0.5;
        }
        .footer-nav ul li {
          margin-bottom: 10px;
        }
        .footer-nav ul li a {
          font-size: 14px;
          font-weight: 600;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition-smooth);
        }
        .social-links li a .link-icon {
          opacity: 0;
          transform: translate(-5px, 5px);
          transition: all 0.3s ease;
        }
        .social-links li a:hover {
          opacity: 1;
        }
        .social-links li a:hover .link-icon {
          opacity: 1;
          transform: translate(0, 0);
        }
        .footer-bottom {
          padding: 30px 0;
          border-top: 1px solid var(--border-color);
          font-size: 11px;
          opacity: 0.4;
          text-align: center;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
