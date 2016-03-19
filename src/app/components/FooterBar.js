import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import s from '../styles/FooterBar.scss';



class FooterBar extends React.Component {
  render(){
    return(
      <div className= 'footer'>
        <div className= 'nav-container'>
          <span>© 2016 Andrew Wang</span>
          <ul className= 'nav-list'>
            <li className='nav-link'><a href='https://www.linkedin.com/in/andrewzwang' target='_blank'> <i className='fa fa-linkedin-square'></i> </a></li>
            <li className='nav-link'><a href='https://github.com/zxwandrew' target='_blank'> <i className='fa fa-github-square'> </i></a></li>
            <li className='nav-link'><a href='mailto:zxwandrew@gmail.com'> <i className='fa fa-envelope'></i> </a></li>
          </ul>
        </div>
      </div>
    );
  }

};

export default FooterBar;
