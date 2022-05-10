import React from 'react';
import { NavLink } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="layout">
        <h1>Looking for a Jira Service Management alternative?</h1>
        <h3>
          See why thousands of organizations choose This App to modernize service management, boost
          productivity and achieve quick returns with a single platform for IT
        </h3>
        <div className="sing-btn-wrapper">
          <ul>
            <NavLink className="link sing-in" to={'/auth'}>
              Login
            </NavLink>
          </ul>
          <ul>
            <NavLink className="link sing-out" to={'/auth'}>
              Registration
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
