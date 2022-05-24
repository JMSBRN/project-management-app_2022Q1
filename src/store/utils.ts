export type State = {
  profile: IFormProfile;
  board: IFormBoard;
  // boardList: IBoardList;
  column: IFormColumn;
  // columnList: IColumnList;
  task: IFormTask;
  // taskList: ITaskList;
  modal: IModal;
};

export const initialState = {
  profile: {
    userName: '',
    userEmail: '',
    userPassword: '',
    userList: [],
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
  },
};

export interface IModal {
  isOpen: boolean;
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
