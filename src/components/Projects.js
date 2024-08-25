import React from 'react';
import '../App.css';
import { experienceData } from '../constants/experienceData';

function Projects() {
  return (
    <div className="projectsPage">
      {experienceData.map((project, index) => (
        <div className="projectCard" key={index}>
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.title}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;