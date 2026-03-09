import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials reveal-on-scroll">
      <div className="container testimonials-container">
        <div className="testimonials-left">
          <h2 className="testimonial-header">REAL WORDS <br/> FROM REAL <br/> SOULS</h2>
          <div className="testimonial-img-wrapper">
             <img src="/assets/glitch_3.png" alt="Client" />
          </div>
        </div>
        
        <div className="testimonials-right">
          <div className="testimonial-meta">
            <span className="current-num">01</span> <span className="total-num">from 23</span>
          </div>
          
          <div className="testimonial-quote">
            <p>" PROFESSIONAL, CREATIVE, AND SO EASY TO WORK WITH. THE RESULTS EXCEEDED ALL OUR EXPECTATIONS. "</p>
          </div>
          
          <div className="testimonial-author-wrapper">
            <span className="author-label">[ SARAH K ]</span>
          </div>
        </div>

        <div className="testimonials-nav">
          <button className="nav-btn prev">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
          </button>
          <button className="nav-btn next">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <style>{`
        .testimonials {
          background-color: var(--pitch-black);
          color: var(--pure-white);
          padding: 150px 0;
          overflow: hidden;
        }
        .testimonials-container {
          display: flex;
          position: relative;
          justify-content: space-between;
          align-items: flex-start;
          gap: 100px;
        }
        .testimonials-left {
          flex: 0 0 45%;
        }
        .testimonial-header {
          font-size: clamp(40px, 6vw, 70px);
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 40px;
          letter-spacing: -2px;
        }
        .testimonial-img-wrapper {
          width: 320px;
          height: 380px;
          background-color: #222;
          overflow: hidden;
        }
        .testimonial-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          filter: grayscale(20%);
        }
        .testimonials-right {
          flex: 1;
          padding-top: 100px;
        }
        .testimonial-meta {
          font-size: 13px;
          margin-bottom: 50px;
          font-weight: 500;
        }
        .current-num {
          font-weight: 900;
          margin-right: 10px;
        }
        .total-num {
          color: #666;
        }
        .testimonial-quote {
          margin-bottom: 60px;
          max-width: 500px;
        }
        .testimonial-quote p {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.5px;
        }
        .author-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #999;
          text-transform: uppercase;
        }
        .testimonials-nav {
          position: absolute;
          right: 0;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1a1a1a;
          color: #666;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-btn.next {
          background-color: var(--pure-white);
          color: #d12c2c;
        }
        .nav-btn:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .testimonials-container {
            flex-direction: column;
            gap: 50px;
          }
          .testimonials-nav {
            position: relative;
            flex-direction: row;
            bottom: 0;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
