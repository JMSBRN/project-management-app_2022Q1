import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './welcome.style';

const Welcome = () => {
  return (
    <Styled.Welcome>
      <Styled.Layout>
        <Styled.H1>Looking for a Jira Service Management alternative?</Styled.H1>
        <Styled.H3>
          See why thousands of organizations choose This App to modernize service management, boost
          productivity and achieve quick returns with a single platform for IT
        </Styled.H3>
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
