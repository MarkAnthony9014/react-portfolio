import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'

function App() {
  const [projects] = useState([
    {
      name: 'LiftoSphere',
      description: 'A social media community for fitness. Encourage and guide others, while learning.',
    },
    { name: 'Taskinator Pro', description: 'A task tracking application' },
    { name: 'Git It Done', description: 'A search engine for Git repositories' },
    { name: 'Work Day Scheduler', description: 'An application that helps you to organize your work day' },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      ></Nav>
      <main>
        <div>
          <AboutMe></AboutMe>
          <Projects></Projects>
        </div>
      </main>
    </div>
  );
}

export default App;
