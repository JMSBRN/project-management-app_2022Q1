export const initialState = {
  profile: {
    userName: '',
    userEmail: '',
    userPassword: '',
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
}

export interface IFormTask {
  taskName: string;
  taskDescr: string;
  taskUser: string;
  taskList: ITaskData[];
}

export interface IFormBoard {
  title: string;
  descr: string;
}

export type State = {
  profile: IFormProfile;
  board: IFormBoard;
  task: IFormTask;
};

export interface ITaskData {
  taskName: string;
  taskDescr: string;
  taskUser: string;
}
