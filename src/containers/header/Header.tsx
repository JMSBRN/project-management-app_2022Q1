import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Button from '../../components/button/Button';
import * as Styled from './header.style';

const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
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
      <select onChange={changeLanguage}>
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
      <Button className="header-log-out-tn" textButton={'Log-out'}></Button>
    </Styled.Header>
  );
};

export default Header;
