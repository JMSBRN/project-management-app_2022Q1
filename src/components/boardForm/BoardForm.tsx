import React from 'react';
import * as Styled from './BoardForm.style';

export const BoardForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleBoardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Styled.Form onSubmit={handleBoardSubmit}>
        <Styled.Title>Create new board</Styled.Title>
        <label>Board name:</label>
        <Styled.Form_input
          type="text"
          value=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder="Enter board name"
          required
        />
        <label>Board description:</label>
        <Styled.Form_input
          type="text"
          value=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder="Enter board description"
          required
        />
        <Styled.Form_input_submit type="submit" value="Create board" />
      </Styled.Form>
    </>
  );
};
