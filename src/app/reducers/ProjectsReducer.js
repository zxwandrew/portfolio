import { GET_PROJECTS, SET_CURRENT_PROJECT } from '../actions/ProjectsActions';

const initialProjectState = {
  projects: [
  {
    link : 'https://pure-dawn-16123.herokuapp.com/',
    git: 'https://github.com/zxwandrew/ArcGISFly',
    detailurl: '/project/arcgisfly',
    title : 'ArcGIS Fly',
    classname : 'arcgisfly',
    technology : ['WebSockets', 'Node', 'Esri JS API', 'Gulp'],
    image: '../assets/arcgisfly.png'
  },
  {
    link : 'http://arcdraw.meteor.com/',
    git: 'https://github.com/zxwandrew/ArcDraw',
    detailurl: '/project/arcdraw',
    title : 'ArcDraw',
    classname : 'arcdraw',
    technology : ['Meteor', 'Esri JS API', 'Node'],
    image: '../assets/arcdraw.png'
  }
],
currentProject: null
};

const ProjectsReducer = (state = initialProjectState, action) => {
  switch (action.type){
    case GET_PROJECTS:
      return Object.assign({}, state, {
        projects: action.projects
      });
    case SET_CURRENT_PROJECT:
      return Object.assign({}, state, {
        currentProject: action.id
      });
    default:
      return state;
  }
};

export {ProjectsReducer}
