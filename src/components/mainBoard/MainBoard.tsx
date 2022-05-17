import React from 'react';
import * as Styled from './MainBoard.style';
interface BoardProps {
  boardTitle: string;
  boardDescription: string;
}
const MainBoard = ({ boardTitle, boardDescription }: BoardProps) => {
  return (
    <Styled.Main_Board>
      <Styled.Link to="/board">
        <Styled.Title>{boardTitle}</Styled.Title>
        <Styled.Description>{boardDescription}</Styled.Description>
      </Styled.Link>
      <Styled.Delete_main_board>&#128465;</Styled.Delete_main_board>
    </Styled.Main_Board>
  );
};

export default MainBoard;
