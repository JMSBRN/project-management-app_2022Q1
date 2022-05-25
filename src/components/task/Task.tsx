import React from 'react';
import { useDispatch } from 'react-redux';
import { setRemoveTask } from '../../store/actions/actionCreators';
import { ITaskList } from '../../store/utils';
import * as Styled from './Task.style';

interface IProps {
  taskItem: ITaskList;
}

const Task = (props: IProps) => {
  const { taskName, taskDescr, taskUser } = props.taskItem;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(setRemoveTask(taskName));
  };

  return (
    <Styled.Task_block>
      <Styled.Title>{taskName}</Styled.Title>
      <Styled.Descr>{taskDescr}</Styled.Descr>
      <Styled.User>{taskUser}</Styled.User>
      <Styled.Delete_main_board onClick={handleRemove}>&#128465;</Styled.Delete_main_board>
    </Styled.Task_block>
  );
};

export default Task;
