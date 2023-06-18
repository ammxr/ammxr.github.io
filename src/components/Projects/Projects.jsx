import React, { useState } from 'react';
import './Projects.css';
import '../../App.css'
import Card from '../Card/Card';
import dotProjectThumbnail from '../../images/dotProjectThumbnail.jpg';
import autoServerProjectThumbnail from '../../images/autoServerProjectThumbnail.jpg';
import musicStoreProjectThumbnail from '../../images/musicStoreProjectThumbnail.jpg';


const Projects = () => {
  const cardData = [
    { id: 1, title: 'AutoServer', thumbnail: autoServerProjectThumbnail, description: 'Discord bot designed specifically to create Minecraft servers. Users can effortlessly create and compile a customized server zip file tailored to their preferences. From choosing icons and settings to specifying the desired Minecraft version, our bot streamlines the process. It also allows custom mod files, empowering server owners to easily expand their personalized Minecraft experience.' },
    { id: 2, title: 'MedVisor', thumbnail: autoServerProjectThumbnail, description: 'Web app using Flask and Coheres API to integrate a custom classification CNN. Surveys user asking a variety of symptomatic questions to then use machine learning to decide on the appropriate physyican to reccomend. The model feeds satisfied tests back into its deep learning model to make it autonomous.' },
    { id: 3, title: 'DOT Stress Analysis', thumbnail: dotProjectThumbnail, description: "Web App Conducts comprehensive mental health surveys, evaluating mental health categories including stress, depression, anxiety, and pessimism. Using our algorithm, we generate a visually compelling heat map that highlights different severities of the test categories in each section. This enables companies to gain valuable insights into their employees' mental health concerns and take proactive measures to promote well-being in the workplace"},
    { id: 4, title: 'MusicStore', thumbnail: musicStoreProjectThumbnail, description: 'Object-oriented Music Store application leveraging the power of inheritance to enhance functionality. Features include lyrics, library, podcasts, customizable playlists, songs, audiobooks, and a store file. Organized commands within their respective files and expertly consolidated them in the UI file for a collected application' },
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
      
      <div className='p-titleContainer'>
        <h1 className="p-title">PROJECTS</h1>
      </div>
      <div className="p-container">
        <div className="arrow previous" onClick={handlePrevious}>
          &lt;
        </div>
        <div className="card-frame">
          {[startCardIndex, startCardIndex + 1, startCardIndex + 2].map((index) => (
            <Card
              key={getCardAtIndex(index).id}
              title={getCardAtIndex(index).title}
              thumbnail={getCardAtIndex(index).thumbnail}
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
