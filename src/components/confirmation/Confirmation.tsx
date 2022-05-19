import React from 'react';
import * as Styled from './confirmation.styled';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../store/actions/actionCreators';

const Confirmation = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Icon>✖</Styled.Icon>
        <Styled.Title>Are you sure?</Styled.Title>
        <Styled.Info>
          Do you really want to delete this User? This process cannot be undone.
        </Styled.Info>
        <Styled.Action>
          <Button textButton="Cancel" onClick={handleClose} />
          <Button textButton="Delete" onClick={handleClose} />
        </Styled.Action>
      </Styled.Wrapper>
    </>
  );
};

export default Confirmation;
