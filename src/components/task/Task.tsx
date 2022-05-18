import React from 'react';
import * as Styled from './Task.style';

interface ITask {
  task: string;
}

export const Task = (props: ITask) => {
  return (
    <Styled.Task_block>
      <Styled.Title>{props.task}</Styled.Title>
    </Styled.Task_block>
  );
};
