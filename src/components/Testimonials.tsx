import React, { useState } from 'react';

const testimonialsData = [
  {
    num: "01",
    quote: "PROFESSIONAL, CREATIVE, AND SO EASY TO WORK WITH. THE RESULTS EXCEEDED ALL OUR EXPECTATIONS.",
    author: "SARAH K",
    image: "/assets/glitch_3.png"
  },
  {
    num: "02",
    quote: "ANTON HAS AN INCREDIBLE EYE FOR DETAIL. EVERY SHOT FEELS LIKE A PIECE OF ART. TRULY REMARKABLE WORK.",
    author: "MICHAEL T",
    image: "/assets/testimony2.jpg"
  },
  {
    num: "03",
    quote: "THE BEST PHOTOGRAPHY EXPERIENCE WE'VE EVER HAD. KIND, PATIENT, AND EXTREMELY TALENTED.",
    author: "EMMA L",
    image: "/assets/testimony1.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials reveal-on-scroll">
      <div className="container testimonials-container">
        <div className="testimonials-left">
          <h2 className="testimonial-header">REAL WORDS <br /> FROM REAL <br /> SOULS</h2>
          <div className="testimonial-img-wrapper">
            <img key={current.image} src={current.image} alt="Client" className="fade-in" />
          </div>
        </div>

        <div className="testimonials-right">
          <div className="testimonial-meta">
            <span className="current-num">{current.num}</span> <span className="total-num">from {String(testimonialsData.length).padStart(2, '0')}</span>
          </div>

          <div className="testimonial-quote">
            <p key={current.quote} className="fade-in">" {current.quote} "</p>
          </div>

          <div className="testimonial-author-wrapper">
            <span key={current.author} className="author-label fade-in">[ {current.author} ]</span>
          </div>
        </div>

        <div className="testimonials-nav">
          <button className="nav-btn prev" onClick={prevTestimonial}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
          </button>
          <button className="nav-btn next" onClick={nextTestimonial}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <style>{`
        .fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
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

        @media (max-width: 600px) {
          .testimonials {
            padding: 60px 0;
          }
          .testimonials-container {
            gap: 30px;
          }
          .testimonial-header {
            font-size: clamp(28px, 8vw, 48px);
            margin-bottom: 24px;
          }
          .testimonial-img-wrapper {
            width: 100%;
            max-width: 280px;
            height: 320px;
            margin: 0 auto;
          }
          .testimonials-right {
            padding-top: 0;
          }
          .testimonial-meta { margin-bottom: 24px; }
          .testimonial-quote {
            margin-bottom: 30px;
          }
          .testimonial-quote p {
            font-size: 16px;
            line-height: 1.5;
          }
          .testimonials-nav {
            margin-top: 30px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
