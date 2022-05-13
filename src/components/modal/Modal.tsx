import React from 'react';
import Button from '../button/Button';
import * as Styled from './Modal.styled';

interface IModal {
  handleClose?: () => void;
  children?: JSX.Element;
  isOpen?: boolean;
}

const Modal = ({ children, handleClose, isOpen }: IModal) => {
  if (isOpen) {
    return (
      <Styled.Open>
        <Styled.Wrapper>
          <Styled.Body>
            {children}
            <Styled.Btn>
              <Button onClick={handleClose} textButton="✖" />
            </Styled.Btn>
          </Styled.Body>
        </Styled.Wrapper>
      </Styled.Open>
    );
  } else {
    return (
      <Styled.Hide>
        <Styled.Wrapper>
          <Styled.Body>
            {children}
            <Styled.Btn>
              <Button onClick={handleClose} textButton="✖" />
            </Styled.Btn>
          </Styled.Body>
        </Styled.Wrapper>
      </Styled.Hide>
    );
  }
};

export default Modal;
