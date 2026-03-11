import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ANTON PHOTO</h1>
        <div className="hero-images">
          <div className="hero-img-card card-1"><img src="/assets/hero_1.png" alt="Photography 1" /></div>
          <div className="hero-img-card card-2"><img src="/assets/hero_2.png" alt="Photography 2" /></div>
          <div className="hero-img-card card-3"><img src="/assets/hero_3.png" alt="Photography 3" /></div>
          <div className="hero-img-card card-4"><img src="/assets/glitch_1.png" alt="Photography 4" /></div>
        </div>
      </div>
      <div className="hero-footer-text">
        <span>PH.1</span>
        <span>ESTABLISHED IN 2022 BY ANTON PHILIP JUNIOR PHOTOGRAPHER</span>
      </div>
      <style>{`
        .hero {
          position: relative;
          padding: 60px 0 40px;
          text-align: center;
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
        }
        .hero-title {
          font-size: clamp(60px, 15vw, 180px);
          line-height: 0.85;
          margin-bottom: -5%;
          z-index: 1;
          position: relative;
          letter-spacing: -2px;
        }
        .hero-images {
          display: flex;
          justify-content: center;
          gap: 15px;
          position: relative;
          z-index: 2;
          margin-top: -50px;
        }
        .hero-img-card {
          width: 150px;
          height: 200px;
          background: #eee;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: transform 0.5s var(--transition-smooth);
        }
        .hero-img-card:hover {
          transform: translateY(-15px) scale(1.05);
        }
        .hero-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-1 { transform: rotate(-8deg) translateY(20px); }
        .card-2 { transform: rotate(-3deg) translateY(0); }
        .card-3 { transform: rotate(4deg) translateY(10px); }
        .card-4 { transform: rotate(9deg) translateY(30px); }

        .hero-footer-text {
          display: flex;
          justify-content: space-between;
          padding: 40px 5% 0;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .hero { padding: 40px 0 30px; }
          .hero-img-card {
            width: 100px;
            height: 140px;
          }
          .hero-images { gap: 10px; margin-top: -30px; }
        }

        @media (max-width: 600px) {
          .hero { padding: 30px 0 24px; }
          .hero-title { margin-bottom: -8%; }
          .hero-images {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin-top: -20px;
            padding: 0 16px;
          }
          .hero-img-card {
            width: 85px;
            height: 120px;
          }
          .card-1, .card-2, .card-3, .card-4 {
            transform: none;
          }
          .hero-img-card:hover { transform: translateY(-8px) scale(1.03); }
          .hero-footer-text {
            flex-direction: column;
            align-items: center;
            gap: 8px;
            text-align: center;
            padding: 24px 16px 0;
            font-size: 10px;
          }
        }

        @media (max-width: 380px) {
          .hero-img-card {
            width: 70px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
