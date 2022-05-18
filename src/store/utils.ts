export type State = {
  profile: IFormProfile;
  board: IFormBoard;
  task: IFormTask;
};

export const initialState = {
  profile: {
    userName: '',
    userEmail: '',
    userPassword: '',
    userList: [],
  },
  task: {
    taskName: '',
    taskDescr: '',
    taskUser: '',
    taskList: [],
  },
  board: {
    title: '',
    descr: '',
  },
};

export interface IFormProfile {
  userName: string;
  userEmail: string;
  userPassword: string;
  userList: IRegList[];
}

export interface IFormTask {
  taskName: string;
  taskDescr: string;
  taskUser: string;
  taskList: ITaskList[];
}

export interface IFormBoard {
  title: string;
  descr: string;
}

export interface ITaskList {
  taskName: string;
  taskDescr: string;
  taskUser: string;
}

export interface IRegList {
  userName: string;
  userEmail: string;
  userPassword: string;
}
