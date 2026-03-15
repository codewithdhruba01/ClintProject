import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const WorksPage: React.FC = () => {
  const cards = [
    {
      title: "Candid Expressions",
      description: "Capturing authentic moments exactly as they unfold naturally",
      image: "/assets/asthetic.jpg",
      rotation: -12,
      yOffset: 40,
      zIndex: 1,
    },
    {
      title: "Wedding Stories",
      description: "Documenting the magic and emotion of your perfect day",
      image: "/assets/wadding1.jpg",
      rotation: -6,
      yOffset: 15,
      zIndex: 2,
    },
    {
      title: "Creative Portraits",
      description: "Unique perspectives that showcase your true personality",
      image: "/assets/pexels-trungnguyenphotog-1751682.jpg",
      rotation: 0,
      yOffset: 0,
      zIndex: 3,
    },
    {
      title: "Event Highlights",
      description: "Preserving the atmosphere and energy of every celebration",
      image: "/assets/wadding2.jpg",
      rotation: 6,
      yOffset: 15,
      zIndex: 2,
    },
    {
      title: "Editorial Vision",
      description: "High-end aesthetic shots for brands and magazines",
      image: "/assets/story_featured.png",
      rotation: 12,
      yOffset: 40,
      zIndex: 1,
    }
  ];

  return (
    <div className="works-page-wrapper">
      <div className="works-container">
        {/* Top Badge */}
        <motion.div 
          className="works-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} className="badge-icon" />
          <span>Beyond the lens</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="works-main-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Turning fleeting moments into —<br/>
          <span className="heading-italic">forever memories</span>
        </motion.h1>

        {/* Overlapping Cards Arc */}
        <div className="cards-arc-container">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="arc-card"
              style={{ 
                zIndex: card.zIndex,
                transformOrigin: "bottom center"
              }}
              initial={{ 
                opacity: 0, 
                y: 100 + card.yOffset, 
                rotate: 0 
              }}
              animate={{ 
                opacity: 1, 
                y: card.yOffset, 
                rotate: card.rotation 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + (index * 0.1),
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: card.yOffset - 30, 
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
            >
              <div className="card-image-wrapper">
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-gradient-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="works-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className="works-cta-btn">
            <span className="cta-text">Book a Session</span>
            <span className="cta-circle">
              <ArrowUpRight size={18} color="#000" />
            </span>
          </button>
        </motion.div>
      </div>

      <style>{`
        /* Fonts */
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap');

        .works-page-wrapper {
          background-color: #ffffff;
          min-height: 100vh;
          overflow: hidden;
          padding: 80px 0;
          font-family: 'Inter', sans-serif;
        }

        .works-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Badge */
        .works-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #f5f5f5;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
          margin-bottom: 30px;
        }

        .badge-icon {
          color: #1a1a1a;
        }

        /* Heading */
        .works-main-heading {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.1;
          margin-bottom: 80px;
          letter-spacing: -2px;
        }

        .heading-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(48px, 6.5vw, 84px);
          letter-spacing: -1px;
        }

        /* Cards Arc */
        .cards-arc-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto 80px;
          position: relative;
          height: 400px;
          perspective: 1000px;
        }

        .arc-card {
          width: 260px;
          height: 380px;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          position: absolute;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, z-index 0s;
          cursor: pointer;
        }

        /* Position cards mathematically based on their index to fan out */
        .arc-card:nth-child(1) { left: calc(50% - 130px - 220px); }
        .arc-card:nth-child(2) { left: calc(50% - 130px - 110px); }
        .arc-card:nth-child(3) { left: calc(50% - 130px); }
        .arc-card:nth-child(4) { left: calc(50% - 130px + 110px); }
        .arc-card:nth-child(5) { left: calc(50% - 130px + 220px); }

        .card-image-wrapper {
          width: 100%;
          height: 60%;
          position: relative;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(to top, #ffffff, transparent);
        }

        .card-content {
          padding: 20px 24px;
          text-align: left;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .card-title {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 24px;
          color: #1a1a1a;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .card-description {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #4a4a4a;
          line-height: 1.5;
          font-weight: 400;
        }

        /* CTA Button */
        .works-cta-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          background-color: #111111;
          border: none;
          padding: 8px 8px 8px 24px;
          border-radius: 100px;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .works-cta-btn:hover {
          transform: translateY(-2px);
          background-color: #222222;
        }

        .works-cta-btn:active {
          transform: translateY(0);
        }

        .cta-text {
          color: #ffffff;
          font-size: 15px;
          font-weight: 500;
        }

        .cta-circle {
          width: 44px;
          height: 44px;
          background-color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .works-cta-btn:hover .cta-circle {
          transform: rotate(45deg);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .arc-card { width: 220px; height: 340px; }
          .arc-card:nth-child(1) { left: calc(50% - 110px - 180px); }
          .arc-card:nth-child(2) { left: calc(50% - 110px - 90px); }
          .arc-card:nth-child(3) { left: calc(50% - 110px); }
          .arc-card:nth-child(4) { left: calc(50% - 110px + 90px); }
          .arc-card:nth-child(5) { left: calc(50% - 110px + 180px); }
        }

        @media (max-width: 900px) {
          .cards-arc-container {
            height: auto;
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }
          .arc-card {
            position: relative;
            left: auto !important;
            transform: none !important;
            width: 100%;
            max-width: 350px;
            height: auto;
            min-height: 400px;
          }
          .arc-card:nth-child(n) { left: auto; }
          .card-image-wrapper { height: 250px; }
        }
      `}</style>
    </div>
  );
};

export default WorksPage;
