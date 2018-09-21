import * as types from '../actions/index';

export const view = (state = {
  homePageShowing: false,
  tweetsShowing: false,
  followingShowing: false,
  followersShowing: false,
}, action) => {
  switch (action.type) {
    case types.SHOW_HOMEPAGE:
      return {
        ...state,
        homePageShowing: true,
      };
    case types.SHOW_TWEETS:
      return {
        ...state,
        tweetsShowing: true,
      };
    case types.SHOW_FOLLOWING:
      return {
        ...state,
        followingShowing: true,
      };
    case types.SHOW_FOLLOWERS:
      return {
        ...state,
        followersShowing: true,
      };
    default:
      return {
        ...state,
        homePageShowing: true,
      };;
  }
};
