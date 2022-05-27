import React from 'react';
import * as Styled from './confirmation.styled';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../store/actions/actionCreators';
import { useTranslation } from 'react-i18next';
import { State } from '../../store/utils';

interface IProps {
  handleRemove: (e: React.MouseEvent<HTMLDivElement>) => void;
  boardId?: string;
}

const Confirmation = ({ handleRemove }: IProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsOpen(false));
  };
  //const { boardId } = useSelector((state: State) => state.board);

  return (
    <>
      <Styled.Wrapper>
        <Styled.Icon>✖</Styled.Icon>
        <Styled.Title>{t('Confirmation.title')}?</Styled.Title>
        <Styled.Info>{t('Confirmation.info')}.</Styled.Info>
        <Styled.Action>
          <Button textButton={t('Confirmation.btns.cancel')} onClick={handleClose} />
          <Button
            id="delete"
            textButton={t('Confirmation.btns.delete')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleRemove(e)}
          />
        </Styled.Action>
      </Styled.Wrapper>
    </>
  );
};

export default Confirmation;
