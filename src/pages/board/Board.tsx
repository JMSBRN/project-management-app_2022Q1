import React, { useState } from 'react';
import Column from '../../components/column/Column';
import * as Styled from './board.style';
import Button from './../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/utils';
import ColumnForm from '../../components/columnForm/ColumnForm';
import Modal from '../../components/modal/Modal';
import { setForm, setIsOpen } from '../../store/actions/actionCreators';
import TaskForm from '../../components/taskForm/TaskForm';
import { useTranslation } from 'react-i18next';

const Board = () => {
  const { t } = useTranslation();
  const { isOpen, form } = useSelector((state: State) => state.modal);
  const { columnList } = useSelector((state: State) => state.column);

  const dispatch = useDispatch();
  const handleOpenColumn = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('column'));
  };

  const handleCloseColumn = () => {
    dispatch(setIsOpen(false));
  };

  const column = form === 'column' ? <ColumnForm /> : null;
  const task = form === 'task' ? <TaskForm /> : null;

  return (
    <>
      <Styled.Board>
        {columnList?.map((column, i) => (
          <Column key={i} columnItem={column} />
        ))}
        <Button id="column" textButton={'➕ ' + t('Board.addColumn')} onClick={handleOpenColumn} />
        <Modal isOpen={isOpen} handleClose={handleCloseColumn}>
          {column}
          {task}
        </Modal>
      </Styled.Board>
    </>
  );
};

export default Board;
