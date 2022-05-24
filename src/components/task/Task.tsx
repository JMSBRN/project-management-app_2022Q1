import React from 'react';
import { ITaskList } from '../../store/utils';
import * as Styled from './Task.style';

interface IProps {
  taskItem: ITaskList;
}

const Task = (props: IProps) => {
  const { taskName, taskDescr, taskUser } = props.taskItem;

  return (
    <Styled.Task_block>
      <Styled.Title>{taskName}</Styled.Title>
      <Styled.Descr>{taskDescr}</Styled.Descr>
      <Styled.User>{taskUser}</Styled.User>
    </Styled.Task_block>
  );
};

export default Task;
