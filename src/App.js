import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/contact';

import './App.css';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <AboutMe />

    </div>
  );
}

export default App;
