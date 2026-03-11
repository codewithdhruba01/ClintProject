import React from 'react';

const Stories: React.FC = () => {
  return (
    <section className="stories reveal-on-scroll">
      <div className="container">
        <h2 className="section-title">STORIES I'VE HAD THE HONOR TO TELL</h2>
        <div className="stories-grid">
          <div className="story-card">
            <img src="/assets/hero_1.png" alt="Story 1" />
            <div className="story-info">
              <span>01</span>
              <span>NATURE PHOTOGRAPHY</span>
            </div>
          </div>
          <div className="story-card">
            <img src="/assets/hero_2.png" alt="Story 2" />
            <div className="story-info">
              <span>02</span>
              <span>ALPEN</span>
            </div>
          </div>
          <div className="story-date">
            <span className="date-label">DATE/</span>
            <span className="date-value">MARCH 2025</span>
          </div>
          <div className="story-card large">
            <img src="/assets/glitch_2.png" alt="Story 3" />
            <div className="story-info">
               <span>03</span>
               <span>PUNAKAWAN</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .stories {
          background-color: #000000;
          color: #ffffff;
          padding: 80px 0;
        }
        .section-title {
          text-align: center;
          font-size: 40px;
          margin-bottom: 60px;
        }
        .stories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          align-items: end;
        }
        .story-card {
          position: relative;
        }
        .story-card img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        .story-card:hover img {
          filter: brightness(0.7);
        }
        .story-info {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 700;
          margin-top: 10px;
        }
        .story-date {
          text-align: center;
          padding-bottom: 50px;
        }
        .date-label { font-size: 10px; display: block; opacity: 0.6; }
        .date-value { font-size: 24px; font-weight: 800; }
        .story-card.large {
          grid-column: 3 / 4;
          grid-row: 1 / 3;
        }
        .story-card.large img {
          height: 600px;
        }
      `}</style>
    </section>
  );
};

export default Stories;
