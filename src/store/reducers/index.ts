import { combineReducers } from 'redux';
import { boardFormReducer } from './boardFormReducer';
import { columnFormReducer } from './columnFormReducer';
import { isOpenReducer } from './isOpenReducer';
import { profileFormReducer } from './profileFormReducer';
import { taskFormReducer } from './taskFormReducer';

export default combineReducers({
  profile: profileFormReducer,
  board: boardFormReducer,
  column: columnFormReducer,
  task: taskFormReducer,
  modal: isOpenReducer,
});
