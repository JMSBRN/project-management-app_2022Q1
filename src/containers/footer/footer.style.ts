import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-text-light);
  background-color: var(--color-background-dark);
`;

export const RsSchoolLink = styled.a`
  text-decoration: none;
  color: var(--color-text-light);

  img {
    width: 100px;
    height: 40px;
  }
`;

export const GitLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`;

export const GitImg = styled.img`
  margin: 0 5px;
`;

export const GitLink = styled.a`
  display: flex;
  justify-content: center;
  margin-right: 0 5px;
  text-decoration: none;
  color: var(--color-text-light);

  img {
    width: 20px;
  }
`;
