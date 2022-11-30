import React from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;
