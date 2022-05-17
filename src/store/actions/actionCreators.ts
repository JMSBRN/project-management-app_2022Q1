import { ITaskData } from '../utils';
import { Actions } from './actionTypes';

export const setUserName = (userName: string) => ({
  type: Actions.SET_NAME,
  payload: userName,
});
export const setUserBirth = (userEmail: string) => ({
  type: Actions.SET_EMAIL,
  payload: userEmail,
});
export const setUserCountry = (userPassword: string) => ({
  type: Actions.SET_PASSWORD,
  payload: userPassword,
});
export const setTaskName = (taskName: string) => ({
  type: Actions.SET_TASKNAME,
  payload: taskName,
});
export const setTaskDescr = (taskDescr: string) => ({
  type: Actions.SET_TASKDESCR,
  payload: taskDescr,
});
export const setTaskUser = (taskUser: string) => ({
  type: Actions.SET_TASKUSER,
  payload: taskUser,
});
export const setTaskList = (taskList: ITaskData[]) => ({
  type: Actions.SET_TASKLIST,
  payload: taskList,
});
