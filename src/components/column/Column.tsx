import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setTaskList } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import { Task } from '../task/Task';
import TaskForm from '../taskForm/TaskForm';
import * as Styled from './column.style';

const Column = () => {
  const { taskList } = useSelector((state: State) => state.task);
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state: State) => state.modal);

  const handleOpen = () => {
    dispatch(setIsOpen(true));
    clickButton();
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const clickButton = () => {
    dispatch(setTaskList([...taskList]));
  };

  return (
    <>
      <Styled.Column>
        <Styled.Title>New Task</Styled.Title>
        <Styled.Task_list>
          {taskList?.map((task, i) => {
            return <Task key={i} taskItem={task} />;
          })}
        </Styled.Task_list>
        <Button textButton="Add task" onClick={handleOpen} />
        <Modal isOpen={isOpen} handleClose={handleClose}>
          <TaskForm />
        </Modal>
      </Styled.Column>
    </>
  );
};

export default Column;
