import { combineReducers } from 'redux';
import { tweet } from './tweet';
import { search } from './search';
import { user } from './user';
import { view } from './view';
import { interaction } from './interaction';

export default combineReducers({
  tweet,
  search,
  user,
  interaction,
  view,
});
