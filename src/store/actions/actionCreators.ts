import { IRegList, ITaskList, IColumnList, IBoardList, ILoginList } from '../utils';
import { Actions } from './actionTypes';

export const setUserName = (userName: string) => ({
  type: Actions.SET_USERNAME,
  payload: userName,
});
export const setUserLogin = (userLogin: string) => ({
  type: Actions.SET_USERLOGIN,
  payload: userLogin,
});
export const setLoginList = (loginList: ILoginList[]) => ({
  type: Actions.SET_LOGINLIST,
  payload: loginList,
});
export const setUserEmail = (userEmail: string) => ({
  type: Actions.SET_USEREMAIL,
  payload: userEmail,
});
export const setUserPassword = (userPassword: string) => ({
  type: Actions.SET_USERPASSWORD,
  payload: userPassword,
});
export const setUserLoginPassword = (userLoginPassword: string) => ({
  type: Actions.SET_USERLOGINPASSWORD,
  payload: userLoginPassword,
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
export const setColumnTitle = (columnTitle: string) => ({
  type: Actions.SET_COLUMNTITLE,
  payload: columnTitle,
});
export const setColumnList = (columnList: IColumnList[]) => ({
  type: Actions.SET_COLUMNLIST,
  payload: columnList,
});
export const setBoardTitle = (boardTitle: string) => ({
  type: Actions.SET_BOARDTITLE,
  payload: boardTitle,
});
export const setBoardDescr = (boardDescr: string) => ({
  type: Actions.SET_BOARDDESCR,
  payload: boardDescr,
});
export const setBoardList = (boardList: IBoardList[]) => ({
  type: Actions.SET_BOARDLIST,
  payload: boardList,
});
export const setIsOpen = (isOpen: boolean) => ({
  type: Actions.SET_ISOPEN,
  payload: isOpen,
});
export const setForm = (form: string) => ({
  type: Actions.SET_FORM,
  payload: form,
});
