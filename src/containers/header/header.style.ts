import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  background-color: var(--color-background-dark);
`;

export const HeaderNavLinkWwrapper = styled.div`
  width: 90%;
  display: flex;
`;

export const Ul = styled.ul`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    margin-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-text-white);

    &:hover {
      border-bottom: 1px solid var(--color-text-light);
      color: var(--color-text-light);
    }

    &.active-link {
      color: var(--color-text-light);
    }
  }
`;
