import { combineReducers } from 'redux';
import mainPages from './mainPages';
import loggedPage from './loggedPage';
import getUsers from './getUsers';

export default combineReducers({
  mainPages,
  loggedPage,
  getUsers,
});
