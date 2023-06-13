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
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setStartCardIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const getCardAtIndex = (index) => {
    const cardIndex = index % cardData.length;
    return cardData[cardIndex];
  };

  return (
    <div>
      <h1 className="page-title">PROJECTS</h1>
      <div className="project-container">
        <div className="arrow previous" onClick={handlePrevious}>
          &lt;
        </div>
        <div className="card-frame">
          {[startCardIndex, startCardIndex + 1, startCardIndex + 2].map((index) => (
            <Card
              key={getCardAtIndex(index).id}
              title={getCardAtIndex(index).title}
              description={getCardAtIndex(index).description}
              isCenterCard={index === startCardIndex + 1}
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
