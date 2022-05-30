import { IFormTask, initialState, ITaskList } from '../utils';
import { Reducer } from 'redux';
import { Actions, Action } from '../actions/actionTypes';

export const taskFormReducer: Reducer<IFormTask, Action> = (
  state: IFormTask = initialState.task,
  action: Action
) => {
  switch (action.type) {
    case Actions.SET_TASKNAME: {
      return {
        ...state,
        taskName: action.payload,
      };
    }
    case Actions.SET_TASKDESCR: {
      return {
        ...state,
        taskDescr: action.payload,
      };
    }
    case Actions.SET_TASKUSER: {
      return {
        ...state,
        taskUser: action.payload,
      };
    }
    case Actions.EDIT_TASKITEM: {
      const newTaskList = state.taskList.map((task: ITaskList) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            taskName: action.payload.taskName,
            taskDescr: action.payload.taskDescr,
            taskUser: action.payload.taskUser,
          };
        }
        return task;
      });
      return {
        ...state,
        taskList: newTaskList,
      };
    }
    case Actions.SET_TASKLIST: {
      return {
        ...state,
        taskList: [...action.payload],
      };
    }
    case Actions.REMOVE_TASK: {
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.taskId !== action.payload),
      };
    }
    default:
      return state;
  }
};
