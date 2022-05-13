import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Board = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 20px;
  color: white;
  border-radius: 3px;
  background-color: #5f9ea0;
  &:hover {
    background-color: #008b8b;
    transition: 0.3s;
  }
`;
export const Delete_board = styled.div`
  position: absolute;
  right: 5px;
  bottom: 3px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export const Link = styled(NavLink)`
  width: 90%;
  height: 95%;
  text-decoration: none;
  color: white;
`;
