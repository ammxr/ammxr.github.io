import React, { useState } from 'react';
import './Projects.css';
import '../../App.css'
import Card from '../Card/Card';

const Projects = () => {
  const cardData = [
    { id: 1, title: 'AutoServer', description: '' },
    { id: 2, title: 'MedVisor', description: 'Created a web app using Flask and Coheres API to integrate a classification conventional neural network trained by my group. Surveys user asking a variety of symptomatic questions it then uses its machine learning to decide on the appropriate doctor/physyican to reccomend. The model feeds back satisfied tests back into its deep learning model to make it self-growing and autonomous.' },
    { id: 3, title: 'DOT Stress Analysis', description: 'Description for Card 3' },
    { id: 4, title: 'MusicStore', description: 'Developed a sophisticated, object-oriented Music Store application leveraging the power of inheritance to enhance functionality. Implemented an array of features, including lyrics, library, podcasts, customizable playlists, songs, audiobooks, and a store file. Meticulously organized commands within their respective files and expertly consolidated them in the UI file for a collected application' },
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
    <section>
      <h1 className="p-title">PROJECTS</h1>
      <div className="p-container">
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
    </section>
  );
};

export default Projects;
