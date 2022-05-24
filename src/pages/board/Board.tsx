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
  const { isOpen } = useSelector((state: State) => state.modal);
  const { columnList } = useSelector((state: State) => state.column);
  const dispatch = useDispatch();

  const handleOpenColumn = () => {
    dispatch(setIsOpen(true));
    console.log('column');
  };

  const handleCloseColumn = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Board>
        {columnList?.map((column, i) => (
          <Column key={i} columnItem={column} />
        ))}
        <Button textButton="Add Column" onClick={handleOpenColumn} />
        <Modal isOpen={isOpen} handleClose={handleCloseColumn}>
          <ColumnForm />
        </Modal>
      </Styled.Board>
    </>
  );
};

export default Board;
