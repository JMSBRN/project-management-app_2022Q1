import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setTaskList } from '../../store/actions/actionCreators';
import { IColumnList, State } from '../../store/utils';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Task from '../task/Task';
import TaskForm from '../taskForm/TaskForm';
import * as Styled from './column.style';

interface IProps {
  columnItem: IColumnList;
}

const Column = (props: IProps) => {
  const { columnTitle } = props.columnItem;
  const { taskList } = useSelector((state: State) => state.task);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: State) => state.modal);

  const handleOpenModal = () => {
    dispatch(setIsOpen(true));
    handleAddTask();
    console.log('task');
  };

  const handleCloseModal = () => {
    dispatch(setIsOpen(false));
  };

  const handleAddTask = () => {
    dispatch(setTaskList([...taskList]));
  };

  return (
    <>
      <Styled.Column>
        <Styled.Title>{columnTitle}</Styled.Title>
        <Styled.Task_list>
          {taskList?.map((task, i) => {
            return <Task key={i} taskItem={task} />;
          })}
        </Styled.Task_list>
        <Button textButton="Add task" onClick={handleOpenModal} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <TaskForm />
        </Modal>
        <Styled.Delete_main_board>&#128465;</Styled.Delete_main_board>
      </Styled.Column>
    </>
  );
};

export default Column;
