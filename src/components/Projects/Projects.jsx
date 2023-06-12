import React, { useState } from 'react';
import './Projects.css';
import Card from '../Card/Card';

const Projects = () => {
  const cardData = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, title: 'Card 5', description: 'Description for Card 5' },
  ];

  const [startCardIndex, setStartCardIndex] = useState(0);

  const handleNext = () => {
    setStartCardIndex((prevIndex) =>
      prevIndex === cardData.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setStartCardIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 3 : prevIndex - 1
    );
  };

  return (
    <div>
      <h1 className="page-title">PROJECTS</h1>
      <div className="project-container">
        <div className="arrow previous" onClick={handlePrevious}>
          &lt;
        </div>
        <div className="card-frame">
          {cardData
            .slice(startCardIndex, startCardIndex + 3)
            .map((card, index) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                isCenterCard={index === 1} // Add isCenterCard prop to mark the center card
              />
            ))}
        </div>
        <div className="arrow next" onClick={handleNext}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Projects;
