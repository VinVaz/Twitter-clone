import * as types from '../actions/index';

export const mainPages = (state = {
  loginPageShowing: false,
  loggedPagesShowing: false,
  unloggedPageShowing: false,
}, action) => {
  switch (action.type) {
    case types.SHOW_LOGGED_PAGES:
      return {
        ...state,
        loggedPagesShowing: true,
      };
    case types.SHOW_UNLOGGED_PAGE:
      return {
        ...state,
        unloggedPageShowing: true,
      };
    case types.SHOW_LOGIN_PAGE:
      return {
        ...state,
        loginPageShowing: true,
      };
    default:
      return {
        ...state,
        unloggedPageShowing: true,
      };
  }
};
