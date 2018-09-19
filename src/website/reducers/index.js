import { combineReducers } from 'redux';
import { tweet } from './tweet';
import { search } from './search';
import { view } from './view';
import { interaction } from './interaction';

export default combineReducers({
  tweet,
  search,
  interaction,
  view,
});
