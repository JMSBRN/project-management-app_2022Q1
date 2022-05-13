import React from 'react';
import * as Styled from './Board.style';
interface BoardProps {
  boardTitle: string;
  boardDescription: string;
}
const Board = ({ boardTitle, boardDescription }: BoardProps) => {
  return (
    <Styled.Board>
      <div className="board-title">{boardTitle}</div>
      <div className="board-title">{boardDescription}</div>
    </Styled.Board>
  );
};

export default Board;
