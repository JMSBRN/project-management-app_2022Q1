import React from 'react';
import Column from '../../components/column/Column';
import * as Styled from './board.style';
import Button from './../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/utils';
import ColumnForm from '../../components/columnForm/ColumnForm';
import Modal from '../../components/modal/Modal';
import { setIsOpen } from '../../store/actions/actionCreators';

const Board = () => {
  const { columnList } = useSelector((state: State) => state.column);
  const { isOpen } = useSelector((state: State) => state.modal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setIsOpen(true));
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Board>
        {columnList.map((column, i) => (
          <Column key={i} />
        ))}
        <Button textButton="Add Column" onClick={handleOpen} />
        <Modal isOpen={isOpen} handleClose={handleClose}>
          <ColumnForm />
        </Modal>
      </Styled.Board>
    </>
  );
};

export default Board;
