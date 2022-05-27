import { Reducer } from 'redux';
import { Action, Actions } from '../actions/actionTypes';
import { initialState, IError } from '../utils';

export const LoginErrorsReducer: Reducer<IError, Action> = (
  state: IError = initialState.error,
  action: Action
): IError => {
  switch (action.type) {
    case Actions.SET_LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Actions.SET_PASSWORD_ERROR: {
      return {
        ...state,
        passwordError: action.payload,
      };
    }
    case Actions.SET_USERNOTFOUND_ERROR: {
      return {
        ...state,
        userNotFoundError: action.payload,
      };
    }
    default:
      return state;
  }
};
