import { combineReducers } from 'redux';
import { tweet } from './tweet';
import { search } from './search';
import { interaction } from './interaction';
import view from './view';

export default combineReducers({
  tweet,
  search,
  interaction,
  view,
});
