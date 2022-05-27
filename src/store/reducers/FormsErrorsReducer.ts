import { Reducer } from 'redux';
import { Action, Actions } from '../actions/actionTypes';
import { initialState, IError } from '../utils';

export const FormsErrorsReducer: Reducer<IError, Action> = (
  state: IError = initialState.error,
  action: Action
): IError => {
  switch (action.type) {
    case Actions.SET_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
      };
    }
    case Actions.SET_LOGIN_PASSWORD_ERROR: {
      return {
        ...state,
        loginPasswordError: action.payload,
      };
    }
    case Actions.SET_LOGIN_USERNOTFOUND_ERROR: {
      return {
        ...state,
        loginUserNotFoundError: action.payload,
      };
    }
    default:
      return state;
  }
};
