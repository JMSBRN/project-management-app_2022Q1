import React from 'react';
import Button from '../../components/button/Button';
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
          <Button className="btn sing-in" textButton="Log In" />
          <Button className="btn sing-out" textButton="Authorization" />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
