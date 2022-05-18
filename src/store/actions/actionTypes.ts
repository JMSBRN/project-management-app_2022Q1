import { IRegList, ITaskList } from '../utils';

export enum Actions {
  SET_USERNAME = 'SET_USERNAME',
  SET_USEREMAIL = 'SET_USEREMAIL',
  SET_USERPASSWORD = 'SET_USERPASSWORD',
  SET_USERLIST = 'SET_USERLIST',
  SET_TASKNAME = 'SET_TASKNAME',
  SET_TASKDESCR = 'SET_TASKDESCR',
  SET_TASKUSER = 'SET_TASKUSER',
  SET_TASKLIST = 'SET_TASKLIST',
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
    };
