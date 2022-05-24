import React from 'react';
import { IBoardList } from '../../store/utils';
import * as Styled from './MainBoard.style';

interface IProps {
  boardItem: IBoardList;
}
const MainBoard = (props: IProps) => {
  const { boardTitle, boardDescr } = props.boardItem;

  return (
    <Styled.Main_Board>
      <Styled.Link to="/board">
        <Styled.Title>{boardTitle}</Styled.Title>
        <Styled.Description>{boardDescr}</Styled.Description>
      </Styled.Link>
      <Styled.Delete_main_board>&#128465;</Styled.Delete_main_board>
    </Styled.Main_Board>
  );
};

export default MainBoard;
