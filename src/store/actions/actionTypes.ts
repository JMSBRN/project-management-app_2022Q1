export enum Actions {
    SET_NAME = 'SET_NAME',
    SET_EMAIL = 'SET_EMAIL',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_TASKNAME = 'SET_TASKNAME',
    SET_TASKDESCR = 'SET_TASKDESCR',
  }

export type Action = 
| {
    type: Actions.SET_NAME;
    payload: string;
  }
| {
    type: Actions.SET_EMAIL;
    payload: string;
  }
| {
    type: Actions.SET_PASSWORD;
    payload: string;
  }
  | {
    type: Actions.SET_TASKNAME;
    payload: string;
  }
| {
    type: Actions.SET_TASKDESCR;
    payload: string;
  }