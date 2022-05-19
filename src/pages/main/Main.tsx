import React, { useState } from 'react';
import { BoardForm } from '../../components/boardForm/BoardForm';
import Button from '../../components/button/Button';
import Board from '../../components/mainBoard/MainBoard';
import Modal from '../../components/modal/Modal';
import * as Styled from './Main.style';

interface IBord {
  title: string;
  description: string;
}

const Main = () => {
  const [boards, setBoards] = useState<IBord[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    clickButton();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickButton = () => {
    setBoards([...boards, { title: 'Name board', description: 'Description board' }]);
  };

  return (
    <Styled.Boards_list>
      {boards.map((el, idx) => (
        <Board key={idx} boardTitle={el.title} boardDescription={el.description} />
      ))}
      <Button textButton="➕ Add board" onClick={handleOpen} />
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <BoardForm />
      </Modal>
    </Styled.Boards_list>
  );
};

export default Main;
