import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setForm,
  setId,
  setIsOpen,
  setRemoveColumn,
  setRemoveTask,
  setTaskList,
} from '../../store/actions/actionCreators';
import { IColumnList, State } from '../../store/utils';
import Button from '../button/Button';
import Task from '../task/Task';
import * as Styled from './column.style';
import { useTranslation } from 'react-i18next';

interface IProps {
  columnItem: IColumnList;
}

const Column = (props: IProps) => {
  const { t } = useTranslation();
  const { isOpen, form, id } = useSelector((state: State) => state.modal);
  const { columnTitle, columnId } = props.columnItem;
  const { taskList } = useSelector((state: State) => state.task);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setIsOpen(true));
    handleAddTask();
    dispatch(setId(columnId));
    dispatch(setForm('task'));
  };

  const handleOpenConfirm = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('deleteCol'));
    dispatch(setId(columnId));
  };

  const handleAddTask = () => {
    dispatch(setTaskList([...taskList]));
  };

  // const handleRemoveTask = () => {
  //   dispatch(setRemoveTask(id));
  //   dispatch(setIsOpen(false));
  // };

  return (
    <>
      <Styled.Column>
        <Styled.Title>{columnTitle}</Styled.Title>
        <Styled.Task_list>
          {taskList?.map((task, i) => {
            return <Task key={i} taskItem={task} />;
          })}
        </Styled.Task_list>
        <Button id="task" textButton={'➕ ' + t('Task.addTask')} onClick={handleOpenModal} />
        <Styled.Delete_main_board onClick={handleOpenConfirm}>&#128465;</Styled.Delete_main_board>
      </Styled.Column>
    </>
  );
};

export default Column;
