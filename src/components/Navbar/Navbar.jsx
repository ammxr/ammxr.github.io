import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <button className={`navbar-button ${isOpen ? 'active' : ''}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className="navbar-menu">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
