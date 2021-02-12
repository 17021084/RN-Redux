import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';

// combine app reducers of the app
export default combineReducers({
  libraries: LibraryReducer,
});
