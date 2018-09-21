import * as types from '../actions/index';

const mainPagesReset =  {
  loginPageShowing: false,
  loggedPagesShowing: false,
  unloggedPageShowing: false,
};
const homePageReset =  {
  loginPageShowing: false,
  loggedPagesShowing: true,
    homePageShowing: false,
  unloggedPageShowing: false,
  tweetsShowing: false,
  followingShowing: false,
  followersShowing: false,
  profileBoxShowing: false,
};

export const view = (state = {
  ...homePageReset,
  ...mainPagesReset,
  unloggedPageShowing: true,
  threadShowing: false,
  newTweetsButtonShowing: false,
  backgroundIsHidden: false,
  createNewTweetIsShowing: false,
}, action) => {
  switch (action.type) {
    case types.SHOW_LOGGED_PAGES:
      return {
        ...state,
        ...mainPagesReset,
        loggedPagesShowing: true,
      };
    case types.SHOW_UNLOGGED_PAGE:
      return {
        ...state,
        ...mainPagesReset,
        unloggedPageShowing: true,
      };
    case types.SHOW_LOGIN_PAGE:
      return {
        ...state,
        ...mainPagesReset,
        loginPageShowing: true,
      };
    case types.SHOW_HOMEPAGE:
      return {
        ...state,
        ...homePageReset,
        homePageShowing: true,
      };
    case types.SHOW_TWEETS:
      return {
        ...state,
        ...homePageReset,
        tweetsShowing: true,
      };
    case types.SHOW_FOLLOWING:
      return {
        ...state,
        ...homePageReset,
        followingShowing: true,
      };
    case types.SHOW_FOLLOWERS:
      return {
        ...state,
        ...homePageReset,
        followersShowing: true,
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
