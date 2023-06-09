import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Projects />
      <Projects />
    </div>
  );
}

export default App;
