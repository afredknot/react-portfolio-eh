import React from 'react';
import Projects from "../Portfoliocards"
import complete from '../../utils/ProjectsApi'
 function Portfolio() {
  return (
    <div className='portfolio container  col-lg-4 text-center align-content-center '>
      <h1 className='head'>Portfolio</h1>
      <Projects Projects = { complete } />
      
    </div>
  );
}
export default Portfolio
