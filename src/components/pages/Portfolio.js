import React from 'react';
import Projects from "../PortfolioCards"
import complete from '../../utils/ProjectsApi'
 function Portfolio() {
  return (
    <div>
      <h1 className='text-center'>Portfolio</h1>
      <Projects Projects = { complete } />
    </div>
  );
}
export default Portfolio
