import * as types from '../actions/index';

export const user = (state = {
  showTweets: false,
  showFollowers: false,
  showWhoFollowing: false,
}, action) => {
  switch (action.type) {
    case types.GET_TWEETS:
      return {
        ...state,
        showTweets: !state.showTweets,
      };
    case types.GET_FOLLOWING:
      return {
        ...state,
        showWhoFollowing: !state.showWhoFollowing,
      };
    case types.GET_FOLLOWERS:
      return {
        ...state,
        showFollowers: !state.showFollowers,
      };
    default:
      return state;
  }
};
