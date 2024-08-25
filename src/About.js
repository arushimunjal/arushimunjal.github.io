import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <h3>currently:</h3>
        <p>Incoming junior @ UC San Diego studying computer science</p>
      </div>
      <div className="about-section">
        <h3>next up:</h3>
        <p>Software Engineeriing Intern @ Arthrex</p>
      </div>
      <div className="about-section">
        <h3>previously:</h3>
        <p>Data Science Intern @ Center of Multimodal Imaging and Genetics</p>
      </div>
      <div className="about-section">
        <h3>listening to:</h3>
        <p>A blend of r&b, folk sufi & indie pop</p>
      </div>
    </div>
  );
};

export default About;