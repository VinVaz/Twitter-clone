import { combineReducers } from 'redux';
import { tweet } from './tweet';
import { search } from './search';
import { user } from './user';
import { interaction } from './interaction';

export default combineReducers({
  tweet,
  search,
  user,
  interaction,
});
