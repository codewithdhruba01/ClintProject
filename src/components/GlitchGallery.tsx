import React from 'react';

const GlitchGallery: React.FC = () => {
  const images = [
    '/assets/asthetic.jpg',
    '/assets/glitch_2.png',
    '/assets/glitch_3.png',
    '/assets/glitch_4.png',
    '/assets/wadding1.jpg',
  ];

  return (
    <section className="glitch-gallery">
      <div className="glitch-container">
        {images.map((src, i) => (
          <div key={i} className="glitch-item">
            <img src={src} alt={`Glitch ${i + 1}`} />
          </div>
        ))}
      </div>
      <style>{`
        .glitch-gallery {
          padding: 0;
          border-bottom: 1px solid #eee;
        }
        .glitch-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          height: 350px;
        }
        .glitch-item {
          position: relative;
          overflow: hidden;
          border-right: 1px solid #eee;
        }
        .glitch-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: transform 0.8s var(--transition-smooth);
        }
        .glitch-item:hover img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }
        .glitch-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 45%, rgba(255,59,48,0.1) 50%, transparent 55%);
          background-size: 10px 100%;
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
};

export default GlitchGallery;
