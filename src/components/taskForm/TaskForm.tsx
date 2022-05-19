import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import {
  setTaskDescr,
  setTaskName,
  setTaskUser,
  setTaskList,
  setIsOpen,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './taskForm.styled';

const TaskForm = () => {
  const { taskName, taskDescr, taskUser, taskList } = useSelector((state: State) => state.task);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setTaskList([
        ...taskList,
        {
          taskName: taskName,
          taskDescr: taskDescr,
          taskUser: taskUser,
        },
      ])
    );
    dispatch(setTaskName(''));
    dispatch(setTaskDescr(''));
    dispatch(setTaskUser(''));
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Form onSubmit={handleTaskSubmit}>
        <Styled.Title>Create new task</Styled.Title>
        <label>Task name:</label>
        <Styled.Form_input
          type="text"
          value={taskName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setTaskName)}
          placeholder="Enter task name"
          required
        />
        <label>Task description:</label>
        <Styled.Form_input
          type="text"
          value={taskDescr}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setTaskDescr)}
          placeholder="Enter task description"
          required
        />
        <label>User:</label>
        <Styled.Form_input
          type="text"
          value={taskUser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setTaskUser)}
          placeholder="Enter user"
          required
        />
        <Styled.Form_input_submit type="submit" value="Create task" />
      </Styled.Form>
    </>
  );
};

export default TaskForm;
