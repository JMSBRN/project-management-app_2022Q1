import { IRegList, ITaskList } from '../utils';
import { Actions } from './actionTypes';

export const setUserName = (userName: string) => ({
  type: Actions.SET_USERNAME,
  payload: userName,
});
export const setUserEmail = (userEmail: string) => ({
  type: Actions.SET_USEREMAIL,
  payload: userEmail,
});
export const setUserPassword = (userPassword: string) => ({
  type: Actions.SET_USERPASSWORD,
  payload: userPassword,
});
export const setUserList = (userList: IRegList[]) => ({
  type: Actions.SET_USERLIST,
  payload: userList,
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
export const setTaskList = (taskList: ITaskList[]) => ({
  type: Actions.SET_TASKLIST,
  payload: taskList,
});
