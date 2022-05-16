import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-width: 270px;
  margin-right: 10px;
  padding: 10px;
  background-color: var(--color-background-white);
  color: var(--color-text-dark);
  border: 1px solid var(--color-background-dark);
  align-self: flex-start;
`;

export const Title = styled.div`
  font-weight: 600;
`;

export const Column_list = styled.div`
  overflow-x: auto;
`;
