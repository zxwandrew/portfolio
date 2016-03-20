import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'
import '../styles/core.scss'

class CoreLayout extends React.Component {
  render () {
    return (
      <div className='page-container'>
        <HeaderBar></HeaderBar>
        <div className='view-container'>
          <div className='view'>


            <ReactCSSTransitionReplace
              component="div"
              transitionName="fade-wait"
              transitionEnterTimeout={500} transitionLeaveTimeout={500}
            >
              {React.cloneElement(this.props.children, {
                key: this.props.location.pathname
              })}
            </ReactCSSTransitionReplace>

          </div>
          <FooterBar></FooterBar>
        </div>
      </div>
    );
  }
}

export default CoreLayout;
