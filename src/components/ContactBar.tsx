import React, { useState } from 'react';

const ContactBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'HI@ANTONPHOTO.COM';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-bar">
      <div className="container contact-flex">
        <div className="contact-label">[ GET IN TOUCH ]</div>
        <div className="contact-arrow">
          <div className="line"></div>
          <div className="arrow-head">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </div>
        <div className="contact-email">{email}</div>
        <button 
          className={`contact-status ${copied ? 'copied' : ''}`} 
          onClick={handleCopy}
          aria-label="Copy email address"
        >
          {copied ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          )}
        </button>
      </div>
      <style>{`
        .contact-bar {
          background-color: var(--bg-color);
          color: var(--text-color);
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .contact-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 95%;
          max-width: 1500px;
        }
        .contact-label {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          white-space: nowrap;
          color: #999;
          text-transform: uppercase;
        }
        .contact-arrow {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
          margin: 0 40px;
        }
        .contact-arrow .line {
          height: 1px;
          background: #dbdbdb;
          width: 100%;
        }
        .contact-arrow .arrow-head {
          position: absolute;
          right: -5px;
          color: #dbdbdb;
          display: flex;
          align-items: center;
        }
        .contact-email {
          font-size: clamp(30px, 6vw, 84px);
          font-family: var(--font-primary);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -1.5px;
          margin-right: 30px;
        }
        .contact-status {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #efefef;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d12c2c; /* Red color from screenshot */
          flex-shrink: 0;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .contact-status:hover {
          background: #e5e5e5;
          transform: scale(1.1);
        }
        .contact-status.copied {
          background: #d12c2c;
          color: var(--pure-white);
        }
        @media (max-width: 1024px) {
          .contact-email { font-size: 40px; }
          .contact-arrow { margin: 0 20px; }
        }
        @media (max-width: 768px) {
          .contact-flex {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .contact-arrow {
            display: none;
          }
          .contact-email {
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactBar;
