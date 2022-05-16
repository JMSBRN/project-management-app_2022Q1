export const initialState = {
  profile: {
    userName: '',
    userEmail: '',
    userPassword: '',
  },
  board: {
    taskName: '',
    taskDescr: '',
    taskUser: '',
  },
};

export interface IFormProfile {
  userName: string;
  userEmail: string;
  userPassword: string;
};

export interface IFormBoard {
  taskName: string;
  taskDescr: string;
};

export type State = {
  profile: IFormProfile;
  board: IFormBoard;
};
