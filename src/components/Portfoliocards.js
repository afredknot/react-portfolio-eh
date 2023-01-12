import React from 'react';

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('../assets/images', false, /.(png|jpe?g|svg|gif)$/)); 

{/* <img className=" project-image " src={img[`${project.img}`]}> */}
const Projects = ({ Projects }) => {
  

  return (
    <div className= "cards">
     
      {Projects &&
        Projects.map((project) => (
           <a href={`${project.deployed}`}> <div key={project._id} className="card sm mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
           
              {project.name} <br />
              <span style={{ fontSize: '1rem' }}>
              
              </span>
            </h4> <a href={`${project.github}`}> Github Repo Link</a>
           <div className="card-body bg-light p-2">
            </div>
          </div>
          </a>
          
        ))}
    </div>
    
  );
};

export default Projects;
