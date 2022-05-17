import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;
interface IModal {
  isOpen: boolean;
}
export const Modal = styled.div<IModal>`
  height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  aling-items: center;
`;
export const Btn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
export const Body = styled.div`
  width: 500px;
  height: auto;
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
