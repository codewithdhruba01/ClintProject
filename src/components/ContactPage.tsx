import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, PhoneCall, Plus, Minus, Send, Check } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
      {isOpen && (
        <div className="faq-answer fade-in">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const faqs = [
    { question: "Lorem ipsum dolor sit amet?", answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    { question: "Lorem ipsum dolor sit amet?", answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    { question: "Lorem ipsum dolor sit amet?", answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    { question: "Lorem ipsum dolor sit amet?", answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
  ];

  return (
    <div className="contact-page-v2">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-grid-bg"></div>
        <div className="container center-text">
          <div className="label-badge">Contact</div>
          <h1 className="hero-main-title">Let's create something<br />beautiful together.</h1>
          <p className="hero-sub">We want to hear from you. Let us know how we can help.</p>

          <div className="form-container-wrapper">
            <div className="form-glow"></div>
            <div className="form-card">
              {submitted ? (
                <div className="success-overlay fade-in">
                  <div className="check-circle"><Check size={40} /></div>
                  <h2>Successfully Sent!</h2>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="redesign-form" onSubmit={handleSubmit}>
                  <h3 className="form-inner-title">Send us a Message</h3>
                  <div className="input-row">
                    <User size={18} className="input-icon" />
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-row">
                    <Phone size={18} className="input-icon" />
                    <input type="tel" placeholder="Mobile number" required />
                  </div>
                  <div className="input-row textarea-row">
                    <Send size={18} className="input-icon" style={{ alignSelf: 'flex-start', marginTop: '5px' }} />
                    <textarea placeholder="Enter your message" required rows={4}></textarea>
                  </div>
                  <button type="submit" className="redesign-submit">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="office-section">
        <div className="container">
          <div className="center-text">
            <div className="label-badge-alt">CONTACT INFORMATION</div>
            <h2 className="section-title-redesign">Come and visit our offices<br />around the world</h2>
          </div>

          <div className="office-grid">
            <div className="info-card">
              <div className="large-icon-circle purple">
                <PhoneCall size={24} />
              </div>
              <p className="card-text">(+67) 0422 332 235</p>
            </div>
            <div className="info-card">
              <div className="large-icon-circle pink">
                <Mail size={24} />
              </div>
              <p className="card-text">hello@quillow.edu</p>
            </div>
            <div className="info-card">
              <div className="large-icon-circle yellow">
                <MapPin size={24} />
              </div>
              <p className="card-text">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container small-container">
          <div className="center-text">
            <div className="label-badge-alt">WHAT DO YOU WANT YO KNOW?</div>
            <h2 className="section-title-redesign">Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-page-v2 {
          background-color: var(--bg-color);
          color: var(--text-color);
          padding-bottom: 100px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }
        .small-container {
          max-width: 800px;
        }
        .center-text {
          text-align: center;
        }
        .label-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--text-color);
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .label-badge-alt {
          font-size: 10px;
          font-weight: 800;
          padding: 8px 16px;
          border: 1px solid var(--text-color);
          border-radius: 100px;
          display: inline-block;
          margin-bottom: 25px;
          background: #f8c0c8;
          color: #000;
        }
        .hero-main-title {
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        .hero-sub {
          font-size: 18px;
          color: var(--text-muted);
          margin-bottom: 60px;
        }

        /* Hero / Form */
        .contact-hero {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }
        .hero-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(var(--border-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0.1;
          pointer-events: none;
        }
        .form-container-wrapper {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }
        .form-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(230,200,250, 0.4) 0%, transparent 70%);
          z-index: 0;
        }
        .form-card {
          position: relative;
          z-index: 1;
          background: var(--bg-color);
          padding: 40px;
          border-radius: 30px;
          border: 2px solid var(--text-color);
          box-shadow: 0 20px 0 var(--text-color);
          margin-bottom: 50px;
        }
        .form-inner-title {
          font-size: 22px;
          margin-bottom: 30px;
          font-weight: 700;
        }
        .input-row {
          display: flex;
          align-items: center;
          gap: 15px;
          border: 2px solid var(--text-color);
          border-radius: 12px;
          padding: 12px 20px;
          margin-bottom: 15px;
          background: var(--bg-color);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }
        .input-icon {
          color: var(--text-muted);
        }
        .input-row input {
          border: none;
          background: none;
          width: 100%;
          font-size: 15px;
          font-family: inherit;
          color: var(--text-color);
        }
        .input-row textarea {
          border: none;
          background: none;
          width: 100%;
          font-size: 15px;
          font-family: inherit;
          color: var(--text-color);
          resize: none;
          padding-top: 5px;
        }
        .input-row textarea:focus {
          outline: none;
        }
        .textarea-row {
          align-items: flex-start;
          padding-top: 15px;
        }
        .redesign-submit {
          width: 100%;
          padding: 18px;
          background: #dcd0ff;
          border: 2px solid var(--text-color);
          border-radius: 12px;
          font-weight: 800;
          font-size: 16px;
          color: #000;
          cursor: pointer;
          transition: transform 0.2s ease;
          margin-top: 10px;
        }
        .redesign-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 0 var(--text-color);
        }

        /* Office Section */
        .office-section {
          padding: 100px 0;
        }
        .section-title-redesign {
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.2;
          margin-bottom: 60px;
        }
        .office-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .info-card {
          background: var(--bg-color);
          border: 2px solid var(--text-color);
          border-radius: 15px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 8px 0 var(--text-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .large-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #000;
          color: #000;
        }
        .large-icon-circle.purple { background: #dcd0ff; }
        .large-icon-circle.pink { background: #f8c0c8; }
        .large-icon-circle.yellow { background: #fff4af; }
        .card-text {
          font-weight: 700;
          font-size: 18px;
        }

        /* FAQ Section */
        .faq-section {
          padding: 100px 0;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 50px;
        }
        .faq-item {
          border: 2px solid var(--text-color);
          border-radius: 12px;
          padding: 20px 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: var(--bg-color);
          box-shadow: 0 4px 0 var(--text-color);
        }
        .faq-item.open {
          background: #fff4af;
          color: #000;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 16px;
        }
        .faq-answer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.1);
          line-height: 1.6;
          font-weight: 500;
        }

        .success-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
        }
        .check-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #d4edda;
          color: #28a745;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .office-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
