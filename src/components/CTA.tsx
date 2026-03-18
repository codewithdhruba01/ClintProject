import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="cta" style={{ backgroundImage: "url('/assets/cta.jpg')" }}>
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2 className="cta-title">LET'S CAPTURE SOMETHING REAL.</h2>
        <p className="cta-subtitle">[ AVAILABILITY IS LIMITED — SECURE YOUR DATE NOW. ]</p>
        <a href="#" className="cta-btn">BOOK A SESSION</a>
      </div>
      <style>{`
        .cta {
          position: relative;
          height: 60vh;
          min-height: 500px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #ffffff;
          overflow: hidden;
        }
        .cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
        }
        .cta-content {
          position: relative;
          z-index: 1;
          width: 90%;
          max-width: 1000px;
        }
        .cta-title {
          font-size: clamp(40px, 8vw, 100px);
          line-height: 1;
          margin-bottom: 30px;
          font-weight: 800;
          letter-spacing: -2px;
        }
        .cta-subtitle {
          font-size: clamp(10px, 2vw, 14px);
          letter-spacing: 2px;
          margin-bottom: 50px;
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .cta-btn {
          display: inline-block;
          padding: 18px 45px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
          color: #ffffff;
          transition: var(--transition-smooth);
        }
        .cta-btn:hover {
          background-color: #ffffff;
          color: #000000;
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .cta {
            min-height: 400px;
            padding: 40px 20px;
          }
          .cta-content { width: 100%; }
          .cta-title { margin-bottom: 20px; }
          .cta-subtitle { margin-bottom: 30px; font-size: 10px; }
          .cta-btn {
            padding: 14px 32px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
