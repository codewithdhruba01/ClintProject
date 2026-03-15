import { ArrowRight, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="zen-footer">
      {/* Glow Effect */}
      <div className="footer-glow-ring"></div>

      <div className="container">
        {/* Top Section: CTA & Newsletter */}
        <div className="footer-top-row">
          <div className="footer-cta-box">
            <h2 className="cta-title">Contact Us Now</h2>
            <p className="cta-desc">Simplify Your Customer Relationships, Maximize Growth</p>
          </div>

          <div className="footer-button-box">
            <motion.button
              className="accent-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>

        <div className="footer-divider-main"></div>

        {/* Middle Section: Links & Info */}
        <div className="footer-mid-row">
          <div className="footer-brand-col">
            <div className="brand-logo-glow">
              <div className="logo-svg-placeholder">
                <img src="/Logo.svg" alt="Anton Photo Logo" width="40" height="40" />
              </div>
              <span className="brand-name">ANTON PHOTO</span>
            </div>
            <div className="brand-contacts">
              <a href="mailto:hi@antonphoto.com" className="brand-contact-item">
                <MessageSquare size={16} /> hi@antonphoto.com
              </a>
              <a href="tel:+17045550127" className="brand-contact-item">
                <Phone size={16} /> (704) 555-0127
              </a>
            </div>
          </div>

          <div className="footer-nav-grid">
            <div className="nav-column">
              <h4>Menu</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="nav-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="nav-column">
              <h4>Others</h4>
              <ul>
                <li><a href="#">Style Guide</a></li>
                <li><a href="#">Clint Project</a></li>
                <li><a href="#">404 Page</a></li>
              </ul>
            </div>
            <div className="nav-column social-nav-column">
              <h4>Social Media</h4>
              <ul>
                <li><a href="#">Instagram <ArrowUpRight size={14} className="link-icon" /></a></li>
                <li><a href="#">Facebook <ArrowUpRight size={14} className="link-icon" /></a></li>
                <li><a href="#">Linkedin <ArrowUpRight size={14} className="link-icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider-bottom"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div className="bottom-left social-nav-column">
            <span>© 2026 ANTONPHOTO. All rights reserved.</span>
            <a href="#">Privacy Policy <ArrowUpRight size={12} className="link-icon" /></a>
            <a href="#">Terms & Conditions <ArrowUpRight size={12} className="link-icon" /></a>
          </div>
          <div className="bottom-right social-nav-column">
            <span>Designed by <a href="https://codewithdhruba.in/">Dhrubaraj Pati <ArrowUpRight size={12} className="link-icon" /></a></span>
          </div>
        </div>
      </div>

      {/* Large Decorative Text */}
      <div className="footer-bg-text">ANTON</div>

      <style>{`
        .zen-footer {
          background-color: #000;
          color: #fff;
          padding: 100px 0 20px;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* Top Row */
        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
          flex-wrap: wrap;
          gap: 40px;
        }

        .cta-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 15px;
          text-transform: none;
        }

        .cta-desc {
          font-size: 18px;
          color: #999;
          margin-bottom: 30px;
          font-family: 'Inter', sans-serif;
        }

        .footer-button-box {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .accent-btn {
          background: #ccff00;
          color: #000;
          border: none;
          padding: 18px 32px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Middle Row */
        .footer-mid-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          padding: 60px 0;
        }

        .brand-logo-glow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .logo-svg-placeholder {
          color: #ccff00;
        }

        .brand-name {
          font-size: 28px;
          font-weight: 800;
        }

        .brand-contacts {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .brand-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          color: #fff;
          opacity: 0.9;
          font-family: 'Inter', sans-serif;
        }

        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .nav-column h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #fff;
          text-transform: none;
        }

        .nav-column ul li {
          margin-bottom: 15px;
        }

        .nav-column ul li a {
          font-size: 14px;
          color: #999;
          font-family: 'Inter', sans-serif;
          transition: 0.3s;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-column ul li a:hover {
          color: #ccff00;
        }

        .social-nav-column a .link-icon {
          opacity: 0;
          transform: translate(-3px, 3px);
          transition: all 0.3s ease;
        }

        .social-nav-column a:hover .link-icon {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* Bottom Row */
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          padding: 20px 0 10px;
          font-size: 14px;
          color: #666;
          font-family: 'Inter', sans-serif;
        }

        .bottom-left, .bottom-right {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .bottom-left a, .bottom-right a {
          transition: 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .bottom-left a:hover, .bottom-right a:hover {
          color: #ccff00;
        }

        /* Dividers */
        .footer-divider-main {
          height: 1px;
          background: rgba(255,255,255,0.1);
          width: 100%;
        }

        .footer-divider-bottom {
          height: 1px;
          background: rgba(255,255,255,0.1);
          width: 100%;
        }

        /* Visual Effects */
        .footer-glow-ring {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(204, 255, 0, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .footer-bg-text {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 15vw;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          white-space: nowrap;
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .zen-footer { padding: 60px 0 20px; }
          .footer-top-row { flex-direction: column; align-items: stretch; }
          .newsletter-title { text-align: left; }
          .newsletter-input-group { min-width: auto; }
          .footer-mid-row {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 0;
          }
          .cta-title { font-size: 48px; }
        }

        @media (max-width: 640px) {
          .container { padding: 0 20px; }
          .zen-footer { padding: 50px 0 20px; }
          .footer-top-row { margin-bottom: 40px; gap: 24px; }
          .cta-title { font-size: 32px; }
          .cta-desc { font-size: 16px; }
          .footer-button-box { justify-content: stretch; }
          .accent-btn { justify-content: center; }
          .footer-mid-row { padding: 30px 0; gap: 30px; }
          .brand-name { font-size: 22px; }
          .brand-contacts { gap: 12px; }
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .nav-column h4 { font-size: 14px; margin-bottom: 16px; }
          .nav-column ul li a { font-size: 13px; }
          .footer-bottom-row {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            align-items: center;
            padding: 16px 0 0;
            font-size: 12px;
          }
          .bottom-left, .bottom-right {
            flex-direction: column;
            gap: 8px;
          }
          .footer-bg-text { font-size: 12vw; bottom: 80px; }
        }

        @media (max-width: 400px) {
          .footer-nav-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
