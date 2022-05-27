import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForm, setId, setIsOpen, setRemoveBoard } from '../../store/actions/actionCreators';
import { IBoardList, State } from '../../store/utils';
import * as Styled from './MainBoard.style';

interface IProps {
  boardItem: IBoardList;
}
const MainBoard = (props: IProps) => {
  const { boardTitle, boardDescr, boardId } = props.boardItem;
  const dispatch = useDispatch();
  const { id } = useSelector((state: State) => state.modal);

  const handleOpen = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('delete'));
    dispatch(setId(boardId));
  };

  return (
    <Styled.Main_Board id={boardId}>
      <Styled.Link to="/board">
        <Styled.Title>{boardTitle}</Styled.Title>
        <Styled.Description>{boardDescr}</Styled.Description>
      </Styled.Link>
      <Styled.Delete_main_board onClick={handleOpen}>&#128465;</Styled.Delete_main_board>
    </Styled.Main_Board>
  );
};

export default MainBoard;
