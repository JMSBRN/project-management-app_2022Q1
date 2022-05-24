import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Board = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: auto;
  margin: 20px;
`;

export const Link = styled(NavLink)`
  width: 90%;
  height: 95%;
  text-decoration: none;
  color: white;
`;
