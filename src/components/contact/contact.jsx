import React from 'react';
import './contact.css';

const contact = () => {
  const handleEmailClick = () => {
    // Logic to handle email click
  };

  const handleLinkedInClick = () => {
    // Logic to handle LinkedIn click
  };

  const handleInstagramClick = () => {
    // Logic to handle Instagram click
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-links">
        <button className="contact-button" onClick={handleEmailClick}>Send Email</button>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
      </div>
    </div>
  );
};

export default contact;
