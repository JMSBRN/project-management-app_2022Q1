import React from 'react';
import { State } from '../../store/utils';
import { useNavigate } from 'react-router-dom';
import * as Styled from './TaskPage.style';
import { useSelector } from 'react-redux';
import Button from '../../components/button/Button';

export const TaskPage = () => {
  const { taskName, taskDescr, taskUser } = useSelector((state: State) => state.task);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Styled.Wrapper>
      <Styled.Task_block>
        <Styled.Title>{'taskName'}</Styled.Title>
        <Styled.Descr>{'taskDescr'}</Styled.Descr>
        <Styled.User>{'taskUser'}</Styled.User>
      </Styled.Task_block>
      <Button textButton="Go back..." onClick={goBack} />
    </Styled.Wrapper>
  );
};
