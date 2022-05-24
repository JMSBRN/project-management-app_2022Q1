import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BoardForm } from '../../components/boardForm/BoardForm';
import Button from '../../components/button/Button';
import MainBoard from '../../components/mainBoard/MainBoard';
import Modal from '../../components/modal/Modal';
import { setIsOpen } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './Main.style';

const Main = () => {
  const { isOpen } = useSelector((state: State) => state.modal);
  const dispatch = useDispatch();
  const { boardList } = useSelector((state: State) => state.board);

  const handleOpen = () => {
    dispatch(setIsOpen(true));
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <Styled.Boards_list>
      {boardList.map((el, id) => (
        <MainBoard key={id} boardItem={el} />
      ))}
      <Button textButton="➕ Add board" onClick={handleOpen} />
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <BoardForm />
      </Modal>
    </Styled.Boards_list>
  );
};

export default Main;
