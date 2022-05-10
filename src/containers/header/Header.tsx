import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/'}>
            Welcome
          </NavLink>
        </ul>
        <ul>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/main'}>
            Main
          </NavLink>
        </ul>
        <ul>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/board'}>
            Board
          </NavLink>
        </ul>
      </div>
    );
  }
}
