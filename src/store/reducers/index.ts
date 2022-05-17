import { combineReducers } from 'redux';
import { boardFormReducer } from './boardFormReducer';
import { profileFormReducer } from './profileFormReducer';
import { taskFormReducer } from './taskForm';

export default combineReducers({
  board: boardFormReducer,
  profile: profileFormReducer,
  task: taskFormReducer,
});
