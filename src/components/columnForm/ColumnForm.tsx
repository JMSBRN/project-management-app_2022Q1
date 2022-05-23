import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { setColumnList, setColumnTitle, setIsOpen } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './ColumnForm.style';

const ColumnForm = () => {
  const { columnTitle } = useSelector((state: State) => state.columnList);
  const { columnList } = useSelector((state: State) => state.column);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleColumnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setColumnList([
        ...columnList,
        {
          columnTitle: columnTitle,
        },
      ])
    );
    dispatch(setColumnTitle(''));
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Form onSubmit={handleColumnSubmit}>
        <Styled.Title>Create new column</Styled.Title>
        <label>Column name:</label>
        <Styled.Form_input
          type="text"
          value={columnTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setColumnTitle)}
          placeholder="Enter column name"
          required
        />
        <Styled.Form_input_submit type="submit" value="Create column" />
      </Styled.Form>
    </>
  );
};

export default ColumnForm;
