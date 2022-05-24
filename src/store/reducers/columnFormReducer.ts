import { IFormColumn, initialState } from '../utils';
import { Reducer } from 'redux';
import { Actions, Action } from '../actions/actionTypes';

export const columnFormReducer: Reducer<IFormColumn, Action> = (
  state: IFormColumn = initialState.column,
  action: Action
) => {
  switch (action.type) {
    case Actions.SET_COLUMNTITLE: {
      return {
        ...state,
        columnTitle: action.payload,
      };
    }
    case Actions.SET_COLUMNLIST: {
      return {
        ...state,
        columnList: [...action.payload],
      };
    }
    default:
      return state;
  }
};
