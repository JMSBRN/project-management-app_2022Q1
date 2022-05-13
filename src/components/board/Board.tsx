import React from 'react';
import * as Styled from './Board.style';
interface BoardProps {
  boardTitle: string;
  boardDescription: string;
}
const Board = ({ boardTitle, boardDescription }: BoardProps) => {
  return (
    <Styled.Board>
      <Styled.Link to="/board">
        <div className="board-title">{boardTitle}</div>
        <div className="board-title">{boardDescription}</div>
      </Styled.Link>
      <Styled.Delete_board>&#128465;</Styled.Delete_board>
    </Styled.Board>
  );
};

export default Board;
