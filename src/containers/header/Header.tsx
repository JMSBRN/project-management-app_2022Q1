import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/button/Button';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-navLink-wrapper">
            <ul>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/'}>
                Welcome
              </NavLink>
            </ul>
            <ul>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/auth'}>
                Edit profile
              </NavLink>
            </ul>
            <ul>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/board'}>
                Create new board
              </NavLink>
            </ul>
          </div>
          <div className="header-toggle-lang-select">
            <select>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>
          <Button className="header-log-out-btn" textButton={'Log-out'}></Button>
        </div>

        <div className="fake-header"></div>
      </>
    );
  }
}
