import React, { useState } from 'react';
import { State } from '../../store/utils';
import { useNavigate } from 'react-router-dom';
import * as Styled from './TaskPage.style';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import { editTaskItem } from '../../store/actions/actionCreators';

export const TaskPage = () => {
  const { taskName, taskDescr, taskUser, taskId } = useSelector((state: State) => state.task);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [correctedName, setCorrectedName] = useState(taskName);
  const [correctedDescr, setCorrectedDescr] = useState(taskDescr);
  const [correctedUser, setCorrectedUser] = useState(taskUser);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCorrectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedName(e.target.value);
  };
  const handleCorrectDescr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedDescr(e.target.value);
  };
  const handleCorrectUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedUser(e.target.value);
  };

  const handleSave = () => {
    setIsEdit(false);
    dispatch(editTaskItem(taskId, correctedName, correctedDescr, correctedUser));
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <Styled.Wrapper id={taskId}>
      <Styled.Task_block>
        {!isEdit && <Styled.Title onClick={handleEdit}>{taskName}</Styled.Title>}
        {!isEdit && <Styled.Descr onClick={handleEdit}>{taskDescr}</Styled.Descr>}
        {!isEdit && <Styled.User onClick={handleEdit}>{taskUser}</Styled.User>}
        {isEdit && (
          <>
            <Styled.Input type="text" value={correctedName} onChange={handleCorrectName} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSave} />
              <Button textButton="Cancel" onClick={handleCancel} />
            </Styled.Btn_block>
          </>
        )}
        {isEdit && (
          <>
            <Styled.Input type="text" value={correctedDescr} onChange={handleCorrectDescr} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSave} />
              <Button textButton="Cancel" onClick={handleCancel} />
            </Styled.Btn_block>
          </>
        )}
        {isEdit && (
          <>
            <Styled.Input type="text" value={correctedUser} onChange={handleCorrectUser} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSave} />
              <Button textButton="Cancel" onClick={handleCancel} />
            </Styled.Btn_block>
          </>
        )}
      </Styled.Task_block>
      <Button textButton="Go back..." onClick={goBack} />
    </Styled.Wrapper>
  );
};
