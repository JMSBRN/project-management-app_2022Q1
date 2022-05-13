import { Action } from '../actions/actionTypes';
import { Reducer } from 'redux';
import { initialState, IFormProfile } from '../utils';

export const profileFormReducer: Reducer<IFormProfile, Action> = (
  state: IFormProfile = initialState.profile,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
