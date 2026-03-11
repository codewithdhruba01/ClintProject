import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about reveal-on-scroll">
      <div className="container about-grid">
        <div className="about-label">ABOUT</div>
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
        .about-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ccc;
        }
        .about-text p {
          font-size: 24px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 1.2;
          color: #bbb;
        }
        .about-text strong {
          color: var(--text-color);
          font-weight: 800;
        }
      `}</style>
    </section>
  );
};

export default About;
