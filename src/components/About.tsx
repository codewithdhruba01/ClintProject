import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about reveal-on-scroll">
      <div className="container about-grid">
        <div className="about-header">
          <div className="about-label">ABOUT</div>
          <div className="about-arrow">
            <div className="line"></div>
            <ArrowRight size={16} className="arrow-icon" />
          </div>
        </div>
        <div className="about-text">
          <p>ANTON, A PHOTOGRAPHER BASED IN JOGJA. WITH OVER 3 YEARS BEHIND THE LENS, MY PASSION IS CAPTURING AUTHENTICITY, <strong>THE RAW LAUGHTER, THE QUIET GLANCES, THE ONCE-IN-A-LIFETIME MOMENTS. I CREATE IMAGES THAT FEEL ALIVE.</strong></p>
        </div>
      </div>
      <style>{`
        .about {
          padding: 80px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          align-items: start;
          gap: 40px;
        }
        .about-header {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .about-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ccc;
        }
        .about-arrow {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
        }
        .about-arrow .line {
          height: 1px;
          background: #dbdbdb;
          width: 50px;
          transition: var(--transition-smooth);
        }
        .arrow-icon {
          color: #dbdbdb;
          margin-left: -2px;
        }
        .about-text p {
          font-size: 24px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 1.2;
          color: #bbb;
        }
        .about-text strong {
          color: var(--text-color);
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .about { padding: 50px 0; }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-text p {
            font-size: 16px;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .about { padding: 40px 0; }
          .about-text p { font-size: 15px; }
        }
      `}</style>
    </section>
  );
};

export default About;
