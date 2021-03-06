import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import '../styles/core.scss';
import '../styles/HeaderBar.scss';

const ACTIVE = { color: 'red' }

class HeaderBar extends React.Component {
  constructor(props){
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onDropdown = this.onDropdown.bind(this);
    this.offDropdown = this.offDropdown.bind(this);

    this.state = {
      showDropdown: false
    }
  }

  toggleDropdown(){
    this.setState(function(state){
      return {showDropdown: !this.state.showDropdown}
    })
  }

  onDropdown(){
    this.setState(function(state){
      return {showDropdown: true}
    })
  }

  offDropdown(){
    this.setState(function(state){
      return {showDropdown: false}
    })
  }

  render(){
    return(
      <div className='nav-outer'>
        <div className ='nav-container'>
          <div className='nav-logo'><Link to='/'>Andrew Wang</Link></div>

          <div className= 'nav-list'>
            <ul className= 'nav-list'>
              <li className='nav-link'><IndexLink to='/'  activeClassName='nav-link-active' >About</IndexLink></li>
              <li className='nav-link'><Link to='/skills'  activeClassName='nav-link-active'>Skills</Link></li>
              <li className='nav-link'><Link to='/projects'  activeClassName='nav-link-active'>Projects</Link></li>
              <li className='nav-link'>
              <div className='dropdown-section' onMouseOver={this.onDropdown} onMouseOut={this.offDropdown}>
                <a><span className='fa fa-bars dropdown-button'  onClick={this.toggleDropdown}></span></a>
                <div className={this.state.showDropdown ? 'dropdown-menu': 'hidden'}>
                  <ul className='icon-link-container'>
                    <li className='icon-link'><a href='https://www.linkedin.com/in/andrewzwang' target='_blank'> <i className='fa fa-linkedin-square'></i> </a></li>
                    <li className='icon-link'><a href='https://github.com/zxwandrew' target='_blank'> <i className='fa fa-github-square'> </i></a></li>
                    <li className='icon-link'><a href='mailto:zxwandrew@gmail.com'> <i className='fa fa-envelope'></i> </a></li>
                  </ul>
                </div>
              </div>
              </li>
            </ul>



          </div>

        </div>
      </div>

    );
  }
}
export default HeaderBar;
