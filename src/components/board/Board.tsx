import React from 'react';
import * as Styled from './Board.style';
interface BoardProps {
  boardTitle: string;
  boardDescription: string;
}
const Board = ({ boardTitle, boardDescription }: BoardProps) => {
  const handleOnClick = () => {
    console.log('s');
  };
  return (
    <Styled.Board onClick={handleOnClick}>
      <div className="board-title">{boardTitle}</div>
      <div className="board-title">{boardDescription}</div>
      <Styled.Delete_board>&#128465;</Styled.Delete_board>
    </Styled.Board>
  );
};

export default Board;
