import React, { PropTypes } from 'react';
import { Link } from 'react-router';
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
            {this.props.children}
          </div>
          <FooterBar></FooterBar>
        </div>
      </div>
    );
  }
}

export default CoreLayout;
