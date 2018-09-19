import * as types from '../actions/index';

export const view = (state = {
  tweetsShowing: false,
  followingShowing: false,
  followersShowing: false,
  homePageShowing: false,
  profileBoxShowing: false,
  threadShowing: false,
  newTweetsButtonShowing: false,
  backgroundIsHidden: false,
  createNewTweetIsShowing: false,
}, action) => {
  switch (action.type) {
    case types.SHOW_HOMEPAGE:
      return {
        ...state,
        tweetsShowing: false,
        followersShowing: false,
        followingShowing: false,
        homePageShowing: true,
      };
    case types.SHOW_TWEETS:
      return {
        ...state,
        tweetsShowing: true,
        followersShowing: false,
        followingShowing: false,
        homePageShowing: false,
      };
    case types.SHOW_FOLLOWING:
      return {
        ...state,
        tweetsShowing: false,
        followersShowing: false,
        followingShowing: true,
        homePageShowing: false,
      };
    case types.SHOW_FOLLOWERS:
      return {
        ...state,
        tweetsShowing: false,
        followersShowing: true,
        followingShowing: false,
        homePageShowing: false,
      };
    case types.SHOW_THREAD:
      return {
        ...state,
        threadShowing: !state.threadShowing,
        backgroundIsHidden: !state.backgroundIsHidden,
      };
    case types.SHOW_BACKGROUND:
      if (state.backgroundIsHidden) {
        return {
          ...state,
          threadShowing: false,
          backgroundIsHidden: false,
          createNewTweetIsShowing: false,
        };
      } else {
        return state;
      }
    case types.SHOW_CREATENEWTWEET:
      return {
        ...state,
        createNewTweetIsShowing: !state.createNewTweetIsShowing,
        backgroundIsHidden: !state.backgroundIsHidden,
      };
    case types.HANDLE_NEWTWEETS:
      return {
        ...state,
        newTweetsButtonShowing: !state.newTweetsButtonShowing,
      };
    case types.HANDLE_PROFILEBOX:
      return {
        ...state,
        profileBoxShowing: !state.profileBoxShowing,
      };
    default:
      return state;
  }
};
