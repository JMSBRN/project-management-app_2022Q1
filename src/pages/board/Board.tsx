import React, { useState } from 'react';
import './board.css';
import TaskForm from '../../components/taskForm/TaskForm';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';

const Board = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  } 

  return (
    <>
      <div>Board</div>
      <div className="container">
        <Button textButton='Add task' onClick={handleOpen}/>
      </div>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <TaskForm />
      </Modal>
    </>
  );
}

export default Board;