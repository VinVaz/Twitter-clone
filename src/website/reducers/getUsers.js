import * as types from '../actions/index';

const resetState = {
  homePageShowing: false,
  tweetsShowing: false,
  followingShowing: false,
  followersShowing: false,
};

const getUsers = (state = {
  homePageShowing: true,
  tweetsShowing: false,
  followingShowing: false,
  followersShowing: false,
}, action) => {
  switch (action.type) {
    case types.SHOW_HOMEPAGE:
      return {
        ...resetState,
        homePageShowing: true,
      };
    case types.SHOW_TWEETS:
      return {
        ...resetState,
        tweetsShowing: true,
      };
    case types.SHOW_FOLLOWING:
      return {
        ...resetState,
        followingShowing: true,
      };
    case types.SHOW_FOLLOWERS:
      return {
        ...resetState,
        followersShowing: true,
      };
    default:
      return state;
  }
};

export default getUsers;
