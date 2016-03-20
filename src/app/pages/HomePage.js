import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>I build <span className='span-highlight'>Elegant</span>, <span className='span-highlight'>Impactful</span>, and <span className='span-highlight'>Geospatially Aware</span> web applications.</h1>
        <br/>
        <h2> Click here to see a selection of my <span className='span-highlight'><Link to='/projects'>Projects</Link></span> </h2>
      </div>
    );
  }
}

export default HomePage;
