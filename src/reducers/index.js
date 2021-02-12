import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// combine app reducers of the app
export default combineReducers({
  // key là các state sẽ đc gọi
  libraries: LibraryReducer,
  selectLibraryId: SelectionReducer,
});
