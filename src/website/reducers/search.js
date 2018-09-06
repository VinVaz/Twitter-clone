import * as types from '../actions/index';

export const search = (state = '', action) => {
  switch (action.type) {
    case types.SEARCH_TWITTER:
      return action.name;
    default:
      return state;
  }
};
