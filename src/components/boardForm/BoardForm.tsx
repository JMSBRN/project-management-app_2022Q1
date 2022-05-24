import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import {
  setBoardDescr,
  setBoardList,
  setBoardTitle,
  setIsOpen,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './BoardForm.style';

export const BoardForm = () => {
  const { boardList } = useSelector((state: State) => state.board);
  const { boardTitle, boardDescr } = useSelector((state: State) => state.board);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleBoardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setBoardList([
        ...boardList,
        {
          boardTitle: boardTitle,
          boardDescr: boardDescr,
        },
      ])
    );
    dispatch(setBoardTitle(''));
    dispatch(setBoardDescr(''));
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Form onSubmit={handleBoardSubmit}>
        <Styled.Title>Create new board</Styled.Title>
        <label>Board name:</label>
        <Styled.Form_input
          type="text"
          value={boardTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setBoardTitle)}
          placeholder="Enter board name"
          required
        />
        <label>Board description:</label>
        <Styled.Form_input
          type="text"
          value={boardDescr}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setBoardDescr)}
          placeholder="Enter board description"
          required
        />
        <Styled.Form_input_submit type="submit" value="Create board" />
      </Styled.Form>
    </>
  );
};
