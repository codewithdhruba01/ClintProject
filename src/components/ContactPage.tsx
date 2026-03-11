import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page fade-in">
      <div className="container">


        <div className="contact-grid">
          <div className="contact-info">
            <h1 className="contact-title">LET'S<br />CONNECT</h1>
            <p className="contact-desc">
              HAVE A PROJECT IN MIND? OR JUST WANT TO SAY HI? 
              I'M ALWAYS OPEN TO DISCUSSING NEW OPPORTUNITIES AND CREATIVE IDEAS.
            </p>

            <div className="info-items">
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div>
                  <span className="info-label">EMAIL</span>
                  <p>HI@ANTONPHOTO.COM</p>
                </div>
              </div>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <div>
                  <span className="info-label">PHONE</span>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <span className="info-label">LOCATION</span>
                  <p>JOGJA, INDONESIA</p>
                </div>
              </div>
            </div>

            <div className="social-links-large">
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Twitter size={24} /></a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-msg fade-in">
                <Send size={40} className="success-icon" />
                <h2>MESSAGE SENT!</h2>
                <p>THANK YOU FOR REACHING OUT. I'LL GET BACK TO YOU SOON.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="ENTER YOUR NAME"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ENTER YOUR EMAIL"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea 
                    rows={5} 
                    required 
                    placeholder="TELL ME ABOUT YOUR PROJECT"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  SEND MESSAGE <Send size={18} className="btn-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          min-height: 100vh;
          padding: 120px 0 80px;
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: var(--transition-smooth);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .contact-title {
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin-bottom: 30px;
          font-weight: 950;
          letter-spacing: -3px;
        }
        .contact-desc {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 400px;
          line-height: 1.6;
          margin-bottom: 50px;
          text-transform: uppercase;
          font-weight: 500;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 50px;
        }
        .info-item {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .info-icon {
          color: var(--accent-color);
        }
        .info-label {
          font-size: 10px;
          font-weight: 800;
          color: var(--text-muted);
          display: block;
          margin-bottom: 5px;
          letter-spacing: 1px;
        }
        .info-item p {
          font-size: 18px;
          font-weight: 700;
        }
        .social-links-large {
          display: flex;
          gap: 25px;
        }
        .social-links-large a {
          color: var(--text-color);
          transition: var(--transition-smooth);
        }
        .social-links-large a:hover {
          color: var(--accent-color);
          transform: translateY(-5px);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .form-group label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .form-group input, .form-group textarea {
          background: none;
          border: none;
          border-bottom: 1px solid var(--border-color);
          padding: 15px 0;
          color: var(--text-color);
          font-family: inherit;
          font-size: 16px;
          transition: var(--transition-smooth);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-bottom-color: var(--accent-color);
        }
        .submit-btn {
          margin-top: 20px;
          padding: 20px 40px;
          background-color: var(--text-color);
          color: var(--bg-color);
          border: none;
          border-radius: 100px;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: var(--transition-smooth);
          text-transform: uppercase;
        }
        .submit-btn:hover {
          background-color: var(--accent-color);
          color: white;
          transform: scale(1.02);
        }
        .success-msg {
          text-align: center;
          padding: 60px 0;
        }
        .success-icon {
          color: #4CAF50;
          margin-bottom: 20px;
        }
        .success-msg h2 {
          font-size: 32px;
          margin-bottom: 15px;
        }
        .success-msg p {
          color: var(--text-muted);
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 80px; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
