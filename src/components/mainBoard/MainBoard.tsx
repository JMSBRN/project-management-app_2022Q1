import React from 'react';
import { useDispatch } from 'react-redux';
import { setRemoveBoard } from '../../store/actions/actionCreators';
import { IBoardList } from '../../store/utils';
import * as Styled from './MainBoard.style';

interface IProps {
  boardItem: IBoardList;
}
const MainBoard = (props: IProps) => {
  const { boardTitle, boardDescr } = props.boardItem;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(setRemoveBoard(boardTitle));
  };

  return (
    <Styled.Main_Board>
      <Styled.Link to="/board">
        <Styled.Title>{boardTitle}</Styled.Title>
        <Styled.Description>{boardDescr}</Styled.Description>
      </Styled.Link>
      <Styled.Delete_main_board onClick={handleRemove}>&#128465;</Styled.Delete_main_board>
    </Styled.Main_Board>
  );
};

export default MainBoard;
