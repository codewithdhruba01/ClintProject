import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page-wrapper">
      {/* Top Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-typography-content">
            <motion.h1 
              className="about-huge-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I REALLY<br />
              LOVE TO<br />
              TALK WITH<br />
              PEOPLE
            </motion.h1>
            
            <motion.div 
              className="about-signature"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Torre Hope
            </motion.div>
          </div>
          
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1500&auto=format&fit=crop" 
              alt="Portrait of Torre Hope" 
              className="about-portrait-img" 
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom Gray Section */}
      <section className="about-details-section">
        <div className="about-details-container">
          
          <div className="about-details-grid">
            {/* Column 1: Social Links */}
            <div className="about-col social-col">
              <h4 className="about-col-title">Follow Us</h4>
              <ul className="about-social-list">
                <li>
                  <a href="#" className="about-social-link">
                    Instagram <ArrowUpRight size={16} />
                  </a>
                </li>
                <li>
                  <a href="#" className="about-social-link">
                    Youtube <ArrowUpRight size={16} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Text Description with Drop Cap */}
            <div className="about-col text-col">
              <div className="dropcap-paragraph">
                <span className="dropcap">W</span>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </div>
              <p className="normal-paragraph">
                Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>

            {/* Column 3: Testimonial Quote */}
            <div className="about-col quote-col">
              <blockquote className="about-blockquote">
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. consectetur adipiscing elit, sed do eiusmod tempor"
              </blockquote>
              
              <div className="about-testimonial-author">
                <div className="author-info">
                  <span className="author-label">TESTIMONIAL BY</span>
                  <span className="author-name">Cynthia Summer</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
                  alt="Cynthia Summer" 
                  className="author-avatar" 
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <style>{`
        /* Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Outfit:wght@500;600;700;900&family=Inter:wght@400;500;600&display=swap');

        .about-page-wrapper {
          background-color: #ffffff;
          overflow: hidden;
          padding-top: 40px;
        }

        /* Top Section */
        .about-hero-section {
          background-color: #ffffff;
          position: relative;
          z-index: 2;
        }

        .about-hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: relative;
        }

        .about-typography-content {
          flex: 1;
          padding-bottom: 30px;
          position: relative;
          z-index: 3;
        }

        .about-huge-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(50px, 8vw, 120px);
          font-weight: 900;
          color: #1a1a1a;
          line-height: 0.9;
          letter-spacing: -2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .about-signature {
          font-family: 'Caveat', cursive;
          font-size: clamp(40px, 5vw, 80px);
          color: #1a1a1a;
          line-height: 1;
          margin-top: 10px;
          transform: rotate(-5deg);
          transform-origin: left center;
        }

        .about-image-wrapper {
          width: 50%;
          max-width: 650px;
          position: relative;
          z-index: 1;
          margin-bottom: -150px; /* Overlap effect into bottom section */
        }

        .about-portrait-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          /* Keep natural colors from Unsplash matching screenshot */
        }

        /* Bottom Gray Section */
        .about-details-section {
          background-color: #f1f1f1;
          padding-top: 200px; /* Space for overlapped image */
          padding-bottom: 80px;
          position: relative;
          z-index: 0;
        }

        .about-details-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .about-details-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .about-col-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .about-social-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .about-social-list li {
          border-bottom: 1px solid #d1d1d1;
        }
        
        .about-social-list li:first-child {
          border-top: 1px solid #d1d1d1;
        }

        .about-social-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          color: #1a1a1a;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .about-social-link:hover {
          color: #ff3b30;
          padding-left: 5px;
        }

        /* Text Column */
        .text-col {
          padding-right: 30px;
        }

        .dropcap-paragraph {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
          margin-bottom: 25px;
        }

        .dropcap {
          float: left;
          font-family: 'Outfit', sans-serif;
          font-size: 54px;
          line-height: 48px;
          font-weight: 800;
          color: #1a1a1a;
          padding-right: 8px;
          padding-top: 4px;
        }

        .normal-paragraph {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
        }

        /* Quote Column */
        .about-blockquote {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0 0 40px 0;
        }

        .about-testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #d1d1d1;
          padding-top: 20px;
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #888;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .author-name {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          object-fit: cover;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-details-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .social-col {
            grid-column: 1 / -1;
            margin-bottom: 20px;
          }
          .about-hero-container {
            align-items: center;
          }
        }

        @media (max-width: 768px) {
          .about-hero-container {
            flex-direction: column;
          }
          .about-typography-content {
            width: 100%;
            text-align: left;
            padding-bottom: 40px;
          }
          .about-image-wrapper {
            width: 100%;
            max-width: 100%;
            margin-bottom: -100px;
          }
          .about-details-section {
            padding-top: 140px;
          }
          .about-details-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .text-col {
            padding-right: 0;
          }
        }
        
        @media (max-width: 480px) {
          .about-huge-title {
            font-size: 48px;
            letter-spacing: -1px;
          }
          .about-signature {
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
