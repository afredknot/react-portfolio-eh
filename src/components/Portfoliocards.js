import React from 'react';


const ProjectList = ({ projects, title }) => {
  if (!projects.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {project.projectname} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {project.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{project.projectText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
