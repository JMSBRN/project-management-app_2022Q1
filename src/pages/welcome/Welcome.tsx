import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './welcome.style';

const Welcome = () => {
  return (
    <Styled.Welcome>
      <Styled.Layout>
        <Styled.H1>Final project - our version of Trello</Styled.H1>
        <Styled.H3>Course React 2022 Q1:</Styled.H3>
        <Styled.Ul>
          <li>Aleksandr Zakhavai - Team Lead</li>
          <li>Irina Bukley</li>
          <li>Ivan Shukalo</li>
        </Styled.Ul>
        <Styled.SingBtnWrapper>
          <Styled.Ul>
            <NavLink className="link sing-in" to={'/auth'}>
              Login
            </NavLink>
          </Styled.Ul>
          <Styled.Ul>
            <NavLink className="link sing-out" to={'/auth'}>
              Registration
            </NavLink>
          </Styled.Ul>
        </Styled.SingBtnWrapper>
      </Styled.Layout>
    </Styled.Welcome>
  );
};
export default Welcome;
