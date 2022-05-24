import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.div`
  width: auto;
  height: 45px;
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: var(--color-button-regular);
  border-radius: 3px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--color-text-light);
`;
