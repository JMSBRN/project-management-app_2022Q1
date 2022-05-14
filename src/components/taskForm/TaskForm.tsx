import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskDescr, setTaskName, setTaskUser } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './taskForm.styled';

const TaskForm = () => {
  const { taskName, taskDescr, taskUser } = useSelector((state: State) => state.task);
  const dispatch = useDispatch();
  console.log(dispatch);

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTaskName(e.target.value));
  };

  const handleTaskDescr = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTaskDescr(e.target.value));
  };

  const handleTaskUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTaskUser(e.target.value));
  };

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement>,
  //     callback: (value: string) => void //TYPE?????????????????????
  //   ) => {
  //     dispatch(callback(e.target.value));
  //   };

  return (
    <>
      <Styled.Form>
        <Styled.Title>Create new task</Styled.Title>
        <label>Task name:</label>
        <Styled.Form_input
          type="text"
          value={taskName}
          onChange={handleTaskName}
          placeholder="Enter task name"
          required
        />
        <label>Task description:</label>
        <Styled.Form_input
          type="text"
          value={taskDescr}
          onChange={handleTaskDescr}
          placeholder="Enter task description"
          required
        />
        <label>User:</label>
        <Styled.Form_input
          type="text"
          value={taskUser}
          onChange={handleTaskUser}
          placeholder="Enter user"
          required
        />
        <Styled.Form_input_submit type="submit" value="Create task" />
      </Styled.Form>
    </>
  );
};

export default TaskForm;
