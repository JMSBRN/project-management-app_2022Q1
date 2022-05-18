import React from 'react';
import { NavLink } from 'react-router-dom';
import TeamCard from '../../components/teamCard/TeamCard';
import * as Styled from './welcome.style';
import { Team } from '../../team';

interface IMember {
  name: string;
  src: string;
  role: string;
  telegram: string;
  github: string;
  linkedin: string;
  hrefTelegtam: string;
  hrefGithub: string;
  hrefLinkedin: string;
}

const Welcome = () => {
  return (
    <Styled.Welcome>
      <Styled.Layout>
        <Styled.H1>Final project - React 2022 Q1 course</Styled.H1>
        <Styled.Container>
          {Team.map((item: IMember, i: number) => {
            return <TeamCard key={i} member={item} />;
          })}
        </Styled.Container>
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
