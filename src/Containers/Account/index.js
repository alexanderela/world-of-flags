import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { successfulLogin } from '../../actions/userActions';
import { connect } from 'react-redux';
import './Account.scss';
import PropTypes from 'prop-types';

class Account extends Component {
  constructor(){
    super()
  }
  changeRoute = () => {
    this.forceUpdate();
  }

  logoutUser = () => {
    this.props.successfulLogin({});
  }

  render() {
    return (
      <div className='Account'>
        <div className='account-area'>
          <NavLink to='/' onClick={this.changeRoute} className='back-button'></NavLink>
          <div className='account-logout'>log out</div>
        </div>
        <div className='profile-image-container'>
          {/* <img alt='' className='profile-image' /> */}
        </div>
        <div className='user-data'>
          <p className='profile-name'>Alex Ela</p>
          <div className='points-container'>
            <div className='points-label'>points</div>
            <div className='points-number'>25</div>
          </div>
          <div className='account-data'>
            <div className='email-label'>email</div>
            <div className='email-text'>email@email.com</div>
          </div>
          <div className='extra-data'>
          </div>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
}

export default Account;
