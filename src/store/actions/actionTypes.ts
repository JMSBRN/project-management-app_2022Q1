import { IRegList, ITaskList, IColumnList, IBoardList, ILoginList } from '../utils';

export enum Actions {
  SET_USERNAME = 'SET_USERNAME',
  SET_USEREMAIL = 'SET_USEREMAIL',
  SET_USERPASSWORD = 'SET_USERPASSWORD',
  SET_USERLIST = 'SET_USERLIST',
  SET_TASKNAME = 'SET_TASKNAME',
  SET_TASKDESCR = 'SET_TASKDESCR',
  SET_TASKUSER = 'SET_TASKUSER',
  SET_TASKLIST = 'SET_TASKLIST',
  SET_COLUMNTITLE = 'SET_COLUMNTITLE',
  SET_COLUMNLIST = 'SET_COLUMNLIST',
  SET_BOARDTITLE = 'SET_BOARDTITE',
  SET_BOARDDESCR = 'SET_BOARDDESCR',
  SET_BOARDLIST = 'SET_BOARDLIST',
  SET_ISOPEN = 'SET_ISOPEN',
  SET_FORM = 'SET_FORM',
  SET_USERLOGIN = 'SET_USERLOGIN',
  SET_LOGINLIST = 'SET_LOGINLIST',
  SET_USERLOGINPASSWORD = 'SET_USERLOGINPASSWORD',
}

export type Action =
  | {
      type: Actions.SET_USERNAME;
      payload: string;
    }
  | {
      type: Actions.SET_USEREMAIL;
      payload: string;
    }
  | {
      type: Actions.SET_USERPASSWORD;
      payload: string;
    }
  | {
      type: Actions.SET_USERLIST;
      payload: IRegList[];
    }
  | {
      type: Actions.SET_TASKNAME;
      payload: string;
    }
  | {
      type: Actions.SET_TASKDESCR;
      payload: string;
    }
  | {
      type: Actions.SET_TASKUSER;
      payload: string;
    }
  | {
      type: Actions.SET_TASKLIST;
      payload: ITaskList[];
    }
  | {
      type: Actions.SET_COLUMNTITLE;
      payload: string;
    }
  | {
      type: Actions.SET_COLUMNLIST;
      payload: IColumnList[];
    }
  | {
      type: Actions.SET_BOARDTITLE;
      payload: string;
    }
  | {
      type: Actions.SET_BOARDDESCR;
      payload: string;
    }
  | {
      type: Actions.SET_BOARDLIST;
      payload: IBoardList[];
    }
  | {
      type: Actions.SET_ISOPEN;
      payload: boolean;
    }
  | {
      type: Actions.SET_FORM;
      payload: string;
    }
  | {
      type: Actions.SET_USERLOGIN;
      payload: string;
    }
  | {
      type: Actions.SET_USERLOGINPASSWORD;
      payload: string;
    }
  | {
      type: Actions.SET_LOGINLIST;
      payload: ILoginList[];
    };
