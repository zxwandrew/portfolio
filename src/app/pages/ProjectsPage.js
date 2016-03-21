import React, { PropTypes } from 'react';
import {getProjects} from '../api/projects'
import { Link } from 'react-router';
import '../styles/Project.scss'
import '../styles/core.scss';

class ProjectsPage extends React.Component {
  render () {
    const projects = getProjects();

    const technologyRow = (technologies) =>{
      return technologies.map( (technology)=> {
        return (<em key={technology}>{technology}</em>);
      });
    };

    const portfolioRows = projects.map((project, index) => {
      return(
        <div key={project.classname} className='project-card'>
          <div>
            <h4>
              {project.title}
            </h4>

            <div>
              <div className='project-card-detail-top'>
                Tech:
              </div>
              <div className='project-card-detail-top'>
              {technologyRow(project.technology)}
              </div>
            </div>
          </div>

          <Link to={'/project/'+index}>
            <div className='project-card-image-wrap'>
              <img src={project.image} className='project-card-image'/>
              <div className='project-card-image-overlay'>
                <div className='overlay-title'>{project.title}</div>
              </div>
            </div>
        </Link>

          <div>
            {project.link? <div className='project-card-detail-bottom'><a href={project.link}>Visit Site</a></div> : null}
            {project.git? <div className='project-card-detail-bottom'><a href={project.git}>Github</a></div> : null}
          </div>

        </div>
      )
    });


    return (
      <div className="project-card-container">
        <h1 className='page-title'>Selected Projects</h1>
        {portfolioRows}
      </div>
    );
  }
}

export default ProjectsPage;
