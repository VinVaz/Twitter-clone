import * as types from '../actions/index';

export const tweet = (state = '', action) => {
  switch (action.type) {
    case types.CREATE_TWEET:
      return action.text;
    default:
      return state;
  }
};
