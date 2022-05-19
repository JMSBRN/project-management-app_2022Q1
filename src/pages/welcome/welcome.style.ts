import styled from 'styled-components';

export const Welcome = styled.div``;

export const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-light);
`;

export const H1 = styled.h1`
  margin-left: 20%;
  margin-bottom: 50px;
  width: 90%;
  padding-top: 30px;
  font-size: 60px;
  color: rgb(12, 97, 97);
  display: flex;
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
