// `combineReducers` is not currently used, but eventually should be for modular code :D
// When you're ready to use it, un-comment the line below!
import { combineReducers } from 'redux';

import campusesReducer from './campuses.reducer';
// import { studentsReducer } from './students.reducer';

const rootReducer = combineReducers({
  campuses: campusesReducer,
  // students: studentsReducer,
});

export default rootReducer;
