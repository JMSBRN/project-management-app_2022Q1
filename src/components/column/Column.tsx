import React, { useState } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import { Task } from '../task/Task';
import TaskForm from '../taskForm/TaskForm';
import * as Styled from './column.style';

interface IProps {
  title: string;
  tasks: string[];
}

const Column = (props: IProps) => {
  const [tasksList, setTasksList] = useState<string[]>([...props.tasks]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    clickButton();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickButton = () => {
    setTasksList([...tasksList, 'New task']);
  };

  return (
    <>
      <Styled.Column>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Task_list>
          {tasksList.map((task, i) => (
            <Task key={i} task={task} />
          ))}
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
