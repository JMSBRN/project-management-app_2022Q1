import { combineReducers } from 'redux';

import { boardFormReducer } from './boardFormReducer';
import { profileFormReducer } from './profileFormReducer';

export default combineReducers({
  board: boardFormReducer,
  profile: profileFormReducer,
});
