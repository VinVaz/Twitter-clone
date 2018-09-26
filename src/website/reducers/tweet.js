import * as types from '../actions/index';

const tweet = (state = '', action) => {
  switch (action.type) {
    case types.CREATE_TWEET:
      return action.text;
    default:
      return state;
  }
};

export default tweet;
