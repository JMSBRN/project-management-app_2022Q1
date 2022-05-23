export type State = {
  profile: IFormProfile;
  board: IFormBoard;
  boardList: IBoardList;
  column: IFormColumn;
  columnList: IColumnList;
  task: IFormTask;
  taskList: ITaskList;
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
    boardList: [
      {
        boardTitle: '',
        boardDescr: '',
        columnList: [
          {
            columnTitle: '',
            taskList: [
              {
                taskName: '',
                taskDescr: '',
                taskUser: '',
              },
            ],
          },
        ],
      },
    ],
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
  boardList: IBoardList[];
}
export interface IBoardList {
  boardTitle: string;
  boardDescr: string;
  colunmList?: IColumnList[];
}

export interface IFormColumn {
  columnList: IColumnList[];
}
export interface IColumnList {
  columnTitle: string;
  taskList?: ITaskList[];
}

export interface IFormTask {
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
