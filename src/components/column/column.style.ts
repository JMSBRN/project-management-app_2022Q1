import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-width: 270px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--color-background-white);
  color: var(--color-text-dark);
  border: 1px solid var(--color-background-dark);
  align-self: flex-start;
  position: relative;
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Task_list = styled.div`
  overflow-x: auto;
`;

export const Delete_main_board = styled.div`
  position: absolute;
  right: 5px;
  bottom: 3px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
