import styled from 'styled-components';

export const Welcome = styled.div``;

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-light);
`;

export const H1 = styled.h1`
  margin-left: 20%;
  width: 30%;
  padding-top: 30px;
  font-size: 60px;
  color: rgb(12, 97, 97);
`;

export const H3 = styled.h3`
  margin-top: 5%;
  margin-left: 25%;
  width: 60%;
  max-width: 500px;
  font-size: 30px;
  color: rgb(184, 84, 84);
`;

export const SingBtnWrapper = styled.div`
  position: absolute;
  top: 120px;
  right: 5%;
  margin: 10px;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Ul = styled.ul`
  a {
    width: auto;
    height: auto;
    font-size: 24px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    text-decoration: none;
    color: var(--color-text-light);
    background-color: var(--color-background-dark);
    cursor: pointer;
  }
`;
