import React from 'react';
import './Card.css';

const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="c-imageFrame"></div>
      <div className="c-titleFrame">
        <c-title>{title}</c-title>
      </div>
    </div>
  );
};

export default Card;
