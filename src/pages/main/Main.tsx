import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BoardForm } from '../../components/boardForm/BoardForm';
import Button from '../../components/button/Button';
import Board from '../../components/mainBoard/MainBoard';
import Modal from '../../components/modal/Modal';
import { setIsOpen } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './Main.style';

interface IBord {
  title: string;
  description: string;
}

const Main = () => {
  const { isOpen } = useSelector((state: State) => state.modal);
  const dispatch = useDispatch();
  const [boards, setBoards] = useState<IBord[]>([]);

  const handleOpen = () => {
    dispatch(setIsOpen(true));
    clickButton();
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
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
