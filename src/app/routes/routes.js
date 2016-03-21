import React from "react";
import {Route, IndexRoute} from "react-router";

import CoreLayout from "../layouts/CoreLayout";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectDetailsPage from '../pages/ProjectDetailsPage'

module.exports = (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomePage}/>
    <Route path='/projects' component={ProjectsPage}/>
    <Route path='/skills' component={SkillsPage}/>
    <Route path='/project/:name' component={ProjectDetailsPage}/>

  </Route>
);
