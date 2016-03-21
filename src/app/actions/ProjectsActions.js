export const GET_PROJECTS = 'GET_PROJECTS'
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'

export const getProjects = (projects) =>{
  return{
    type: GET_PROJRECTS,
    projects: projects
  };
};

export const setCurrentProject = (id) =>{
  return{
    type: SET_CURRENT_PROJECT,
    id: id
  }
}
