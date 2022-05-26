export type State = {
  profile: IFormProfile;
  board: IFormBoard;
  // boardList: IBoardList;
  column: IFormColumn;
  // columnList: IColumnList;
  task: IFormTask;
  // taskList: ITaskList;
  modal: IModal;
  auth: IAuthForm;
  login: IFormLogin;
};

export const initialState = {
  profile: {
    userName: '',
    userEmail: '',
    userPassword: '',
    userList: [],
  },
  auth: {
    name: '',
    login: '',
    password: '',
  },
  login: {
    userLogin: '',
    userLoginPassword: '',
  },
  board: {
    boardTitle: '',
    boardDescr: '',
    boardList: [
      // {
      //   boardTitle: '',
      //   boardDescr: '',
      //   columnTitle: '',
      //   columnList: [
      //     {
      //       columnTitle: '',
      //       taskList: [],
      //     },
      //     {
      //       columnTitle: '',
      //       taskList: [
      //         {
      //           taskName: '',
      //           taskDescr: '',
      //           taskUser: '',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  column: {
    columnTitle: '',
    columnList: [],
  },
  task: {
    taskName: '',
    taskDescr: '',
    taskUser: '',
    taskList: [],
  },
  modal: {
    isOpen: false,
    form: '',
  },
};

export interface IModal {
  isOpen: boolean;
  form: string;
}

export interface IFormProfile {
  userName: string;
  userEmail: string;
  userPassword: string;
  userList: IRegList[];
}

export interface IFormBoard {
  boardTitle: string;
  boardDescr: string;
  boardList: IBoardList[];
}
export interface IBoardList {
  boardTitle: string;
  boardDescr: string;
}

export interface IFormColumn {
  columnTitle: string;
  columnList: IColumnList[];
}
export interface IColumnList {
  columnTitle: string;
}

export interface IFormTask {
  taskName: string;
  taskDescr: string;
  taskUser: string;
  taskList: ITaskList[];
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
export interface IAuthForm {
  name: string;
  login: string;
  password: string;
}
export interface IFormLogin {
  userLogin: string;
  userLoginPassword: string;
}
