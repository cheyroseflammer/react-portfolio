import { Navbar, Hero, About, Projects } from './components';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
