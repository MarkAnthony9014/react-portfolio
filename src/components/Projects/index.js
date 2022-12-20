import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/liftosphereport.jpeg"


function Projects(props) {
  const currentProject = {
   name: "LiftoSphere",
   description: "A social media community for fitness. Encourage and guide others, while learning."
};

  
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div className="flex-row">
      <a href="https://github.com/MarkAnthony9014/fitness-project-3">
        <img
         style={{ width: 500, height: 500}}
         src={photo}
         alt="LiftoSphere example"
         classname="img-thumbnail mx-1"
        />
       </a>
      </div>

    </section>
  );
}
export default Projects;