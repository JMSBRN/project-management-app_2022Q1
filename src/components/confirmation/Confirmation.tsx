import React from 'react';

import * as Styled from './confirmation.styled';
import Button from '../button/Button';

interface IParam {
  param: string;
}

const Confirmation = (param: IParam) => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.Icon>✖</Styled.Icon>
        <Styled.Title>Are you sure?</Styled.Title>
        <Styled.Info>Do you really want to delete this User? This process cannot be undone.</Styled.Info>
        <Styled.Action>
          <Button textButton="Cancel"/>
          <Button textButton="Delete"/>
        </Styled.Action>
      </Styled.Wrapper>
    </>
  );
};

export default Confirmation;
