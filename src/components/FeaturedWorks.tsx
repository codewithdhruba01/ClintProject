import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const categoriesData = [
  { id: 'portrait', label: 'PORTRAIT PHOTOGRAPHY', image: '/assets/glitch_3.png', count: '01' },
  { id: 'lifestyle', label: 'LIFESTYLE & BRANDING', image: '/assets/asthetic.jpg', count: '02' },
  { id: 'engagement', label: 'ENGAGEMENT & WEDDINGS', image: '/assets/wadding2.jpg', count: '03' },
  { id: 'family', label: 'FAMILY & NEWBORN', image: '/assets/wadding1.jpg', count: '04' },
];

const FeaturedWorks: React.FC = () => {
  const logos = ['Livestorm', 'Pitch', 'Courier', 'Almanac', 'Appsheet'];
  const [activeCategory, setActiveCategory] = useState(categoriesData[1]); // Default to Lifestyle

  return (
    <>
      <div className="logo-bar">
        <div className="container logo-flex">
          {logos.map(logo => (
            <div key={logo} className="logo-item"><span>{logo}</span></div>
          ))}
        </div>
      </div>

      <section id="works" className="featured-works reveal-on-scroll">
        <div className="works-layout">
          <div className="works-sidebar">
            <div className="works-label">(WORKS) PORTFOLIO PHOTOGRAPHY PREVIEW</div>
            <div className="categories">
              {categoriesData.map((cat) => (
                <div
                  key={cat.id}
                  className={`category ${activeCategory.id === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {activeCategory.id === cat.id && (
                    <ArrowRight className="category-arrow" size={24} />
                  )}
                  {cat.label}
                </div>
              ))}
            </div>
          </div>
          <div className="works-hero-img">
            <img
              key={activeCategory.image}
              src={activeCategory.image}
              alt={activeCategory.label}
              className="fade-in"
            />
            <div className="img-count">[{activeCategory.count}]</div>
          </div>
        </div>
      </section>

      <style>{`
        .logo-bar {
          padding: 30px 0;
          border-bottom: 1px solid var(--border-color);
        }
        .logo-flex {
          display: flex;
          justify-content: space-around;
          align-items: center;
          opacity: 0.5;
        }
        .logo-item span {
          font-size: 18px;
          font-weight: 700;
        }
        .featured-works {
          background-color: #000000;
          color: #ffffff;
          padding: 60px 0;
        }
        .works-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 0 5%;
        }
        .works-sidebar {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .works-label {
          font-size: 11px;
          letter-spacing: 1px;
          opacity: 0.6;
        }
        .categories {
          margin-top: 60px;
        }
        .category {
          font-size: 32px;
          font-weight: 800;
          line-height: 1.1;
          opacity: 0.3;
          margin-bottom: 15px;
          transition: var(--transition-smooth);
          cursor: pointer;
        }
        .category.active {
          opacity: 1;
        }
        .category:hover {
          opacity: 1;
          transform: translateX(10px);
        }
         .category-arrow {
          margin-right: 10px;
          color: #ffffff;
        }
        .fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .works-hero-img {
          position: relative;
          overflow: hidden;
        }
        .works-hero-img img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .works-hero-img:hover img {
          transform: scale(1.05);
        }
        .img-count {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 14px;
          font-weight: 600;
          background: rgba(0,0,0,0.5);
          padding: 8px 12px;
          backdrop-filter: blur(5px);
        }

        @media (max-width: 768px) {
          .logo-bar { padding: 20px 0; overflow-x: auto; }
          .logo-flex {
            flex-wrap: nowrap;
            justify-content: flex-start;
            gap: 32px;
            min-width: max-content;
            padding: 0 16px;
          }
          .logo-item span { font-size: 14px; }
          .featured-works { padding: 40px 0; }
          .works-layout {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 5%;
          }
          .works-sidebar { gap: 20px; }
          .works-label { font-size: 10px; }
          .categories { margin-top: 20px; }
          .category {
            font-size: 20px;
            margin-bottom: 12px;
          }
          .category-arrow { display: inline; }
          .works-hero-img img { height: 350px; }
        }

        @media (max-width: 480px) {
          .category { font-size: 16px; }
          .works-hero-img img { height: 280px; }
          .img-count { bottom: 12px; right: 12px; font-size: 12px; }
        }
      `}</style>
    </>
  );
};

export default FeaturedWorks;
