import styled from 'styled-components';

export const Card = styled.div`
  width: 30%;
  margin: 0 15px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--color-background-white);
  border: 1px solid var(--color-background-dark);
  color: var(--color-background-dark);
`;

export const Photo = styled.div`
  margin: -15px;
  max-height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.h5`
  margin-top: -40px;
  margin-bottom: 40px;
  color: var(--color-background-light);
  font-size: 24px;
`;

export const Role = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Social = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: auto;
  list-style: none;
  li {
    width: 30px;
    height: 30px;
    a {
      text-decoration: none;
      width: 30px;
      height: 30px;
      img {
        width: 100%;
      }
    }
  }
`;
