import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  const linkStyle = {
    textDecoration: 'none',
    fontSize: 30,
  };
  const titleStyle = {
    margin: 200,
    fontSize: 50,
    color: 'red',
  };
  return (
    <div>
      <Link style={linkStyle} to={'/'}>
        Welcome page
      </Link>
      <div style={titleStyle}> Something went wrong... Page NotFound</div>
    </div>
  );
};

export default NotFound;
