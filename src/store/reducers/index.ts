import { combineReducers } from 'redux';
import { boardFormReducer } from './boardFormReducer';
import { isOpenReducer } from './isOpenReducer';
import { profileFormReducer } from './profileFormReducer';
import { taskFormReducer } from './taskForm';

export default combineReducers({
  board: boardFormReducer,
  profile: profileFormReducer,
  task: taskFormReducer,
  modal: isOpenReducer,
});
