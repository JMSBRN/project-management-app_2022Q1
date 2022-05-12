import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;
  
export const Open = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  aling-items: center;
`;

export const Hide = styled.div`
  height: 0;
  display: none;
`;

export const Btn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;  
`;
  
export const Body = styled.div`
  width: 500px;
  height: 300px;
  margin: auto;
  background-color: white;
  margin-top: 5%;
  border-radius: 10px;
  padding-bottom: 10px;
  position: relative;
`;
export const Close = `
  margin-right: 10px;
  font-size: 40px;
  color: var(--color-gray);
  cursor: pointer;
  margin-left: 93%;
`;