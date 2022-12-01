import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/reactrunbuddy.JPG"


function Projects(props) {
  const currentProject = {
   name: "Run Buddy",
   description: "A fitness tracking app",
};

  
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div className="flex-row">
        <img
         src={photo}
         alt="Run Buddy example"
         classname="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Projects;