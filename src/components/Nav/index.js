import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';



 function Nav(props) {
    const {
      projects = [],
      setCurrentProject,
      currentProject,
    } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentProject.name);
    }, [currentProject]);

  return (
      <header>
        <h2>
          <a href="/">
           <span role="img" aria-label="laptop"> 💻</span> Mark's Portfolio
          </a>
        </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
           <a href="#about">
             About me
           </a>
          </li>
          <li>
           <span>Contact</span>
          </li>
          {projects.map((project) => (
            <li
             className ={`mx-1 ${
              currentProject.name === project.name && 'navActive'
             }`} key={project.name}>
              <span onClick={() => {
                setCurrentProject(project)
              }}
              >
                {capitalizeFirstLetter(project.name)}
              </span>
             </li>
          ))}
        </ul>
      </nav>
   </header>
 );
}
  
  
export default Nav;