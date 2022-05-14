import React from 'react';
import Button from '../button/Button';

import * as Styled from './Modal.styled';

interface IModal {
  handleClose?: () => void;
  children: JSX.Element;
  isOpen?: boolean;
}

const Modal = ({ isOpen, children, handleClose }: IModal) => {
  return isOpen ? (
    <ShowModal handleClose={handleClose}>{children}</ShowModal>
  ) : (
    <HideModal handleClose={handleClose}>{children}</HideModal>
  );
};

const ShowModal = ({ children, handleClose }: IModal) => {
  return (
    <Styled.Open>
      <Styled.Wrapper>
        <Styled.Body>
          {children}
          <Styled.Btn>
            <Button className={Styled.Btn} onClick={handleClose} textButton="✖" />
          </Styled.Btn>
        </Styled.Body>
      </Styled.Wrapper>
    </Styled.Open>
  );
};

const HideModal = ({ children, handleClose }: IModal) => {
  return (
    <Styled.Hide>
      <Styled.Wrapper>
        <Styled.Body>
          {children}
          <Styled.Btn>
            <Button className={Styled.Btn} onClick={handleClose} textButton="✖" />
          </Styled.Btn>
        </Styled.Body>
      </Styled.Wrapper>
    </Styled.Hide>
  );
};

export default Modal;
