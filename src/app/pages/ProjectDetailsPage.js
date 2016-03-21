import React, { PropTypes } from 'react';
import {getProjects} from '../api/projects'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/core.scss';
import '../styles/ProjectDetails.scss'

import * as ProjectsActions from '../actions/ProjectsActions';

class ProjectDetailsPage extends React.Component {
  constructor(props){
    super(props);

    // projectsActions.setCurrentProject(params.name);
  }

  render(){
    const {params, projectState, projectsActions} = this.props;
    const projects = getProjects();
    const currentProject = projects[params.name];

    const technologyRow = (technologies) =>{
      return technologies.map( (technology)=> {
        return (<em key={technology}>{technology}</em>);
      });
    };

    return(
      <div>
        <h2>{currentProject.title}</h2>

          <div>
            <div className='project-card-detail-top'>
              Technologies Used:
            </div>
            <div className='project-card-detail-top'>
            {technologyRow(currentProject.technology)}
            </div>
          </div>

          <div className='project-card-image-wrap'>
            <img src={currentProject.image} className='project-card-image'/>
          </div>

          <div className='project-details'>
            {currentProject.details}
          </div>

          <div>
            {currentProject.link? <div className='project-card-detail-bottom'><a href={currentProject.link}>Visit Site</a></div> : null}
            {currentProject.git? <div className='project-card-detail-bottom'><a href={currentProject.git}>Github</a></div> : null}
          </div>
      </div>

    )
  };
}

const mapStateToProps = (state) =>{
  return{
    projectState: state.projects
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    projectsActions: bindActionCreators(ProjectsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsPage);
