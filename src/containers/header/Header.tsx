import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as Styled from './header.style';

export default class Header extends Component {
  render() {
    return (
      <>
        <Styled.Header>
          <Styled.HeaderNavLinkWwrapper>
            <Styled.Ul>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/'}>
                Welcome
              </NavLink>
            </Styled.Ul>
            <Styled.Ul>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/edit'}>
                Edit profile
              </NavLink>
            </Styled.Ul>
            <Styled.Ul>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/board'}>
                Create new board
              </NavLink>
            </Styled.Ul>
          </Styled.HeaderNavLinkWwrapper>
          <div className="header-toggle-lang-select">
            <select>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>
          <Button className="header-log-out-tn" textButton={'Log-out'}></Button>
        </Styled.Header>
      </>
    );
  }
}
