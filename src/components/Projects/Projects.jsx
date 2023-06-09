import React, { useState } from 'react';
import './Projects.css';
import Card from '../Card/Card';

const Projects = () => {
  const [cards] = useState([
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const getCardIndex = (offset) => {
    const index = (activeIndex + offset + cards.length) % cards.length;
    return index;
  };

  return (
    <div className="project-container">
      <div className="arrow previous" onClick={handlePrevious}>
        &lt;
      </div>
      <div className="card-frame">
        <Card
          title={cards[getCardIndex(-1)].title}
          isActive={getCardIndex(-1) === activeIndex}
        />
        <Card
          title={cards[getCardIndex(0)].title}
          isActive={getCardIndex(0) === activeIndex}
        />
        <Card
          title={cards[getCardIndex(1)].title}
          isActive={getCardIndex(1) === activeIndex}
        />
      </div>
      <div className="arrow next" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
};

export default Projects;
