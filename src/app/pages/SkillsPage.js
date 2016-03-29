import React, { PropTypes } from 'react';
import '../styles/Skill.scss';
import '../styles/core.scss';

class SkillsPage extends React.Component {
  render () {
    return (
      <div>
        <h1 className='page-title'>Technologies that I build with:</h1>

        <div>

          <div className='skill-item'>
            <h4>Client Side</h4>
              <ul>
                <li><em>React</em></li>
                <li><em>Redux</em></li>
                <li><em>Dojo</em></li>
                <li><em>Meteor</em></li>
                <li><em>Sass</em></li>
              </ul>
          </div>

          <div className='skill-item'>
            <h4>Server Side</h4>
              <ul>
                <li><em>Node</em>
                  <ul>
                    <li><em>Express</em></li>
                    <li><em>Koa</em></li>
                  </ul>
                </li>
                <li><em>Rails</em></li>
                <li><em>RDBMS</em></li>
                <li><em>NoSQL</em></li>
              </ul>
          </div>

          <div className='skill-item'>
            <h4>Geographic</h4>
              <ul>
                <li><em>Esri</em>
                  <ul>
                    <li><em>JS API</em></li>
                    <li><em>Runtime API</em></li>
                    <li><em>ArcObjects</em></li>
                  </ul>
                </li>
                <li><em>Geofences</em></li>
                <li><em>Geocoding</em></li>
              </ul>
          </div>

          <div className='skill-item'>
            <h4>Languages</h4>
              <ul>
                <li><em>JavaScript</em></li>
                <li><em>C++</em></li>
                <li><em>Java</em></li>
                <li><em>C#</em></li>
                <li><em>Ruby</em></li>
                <li><em>Chinese</em></li>
              </ul>
          </div>

          <div className='skill-item'>
            <h4>Others</h4>
              <ul>
                <li><em>Linux</em></li>
                <li><em>WebSockets</em></li>
                <li><em>Webpack</em></li>
                <li><em>Gulp</em></li>
                <li><em>Git</em></li>
                <li><em>Mocha</em></li>
                <li><em>Android Studio</em></li>
              </ul>
          </div>

          <div className='skill-item'>
            <h4>Non-CS</h4>
              <ul>
                <li><em>Photoshop</em></li>
                <li><em>Illustrator</em></li>
                <li><em>Lightroom</em></li>
                <li><em>MATLAB</em></li>
              </ul>
          </div>


        </div>
      </div>
    );
  }
}

export default SkillsPage;
