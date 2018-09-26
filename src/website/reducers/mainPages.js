import * as types from '../actions/index';

const resetState = {
  loginPageShowing: false,
  loggedPagesShowing: false,
  unloggedPageShowing: false,
};

const mainPages = (state = {
  loginPageShowing: false,
  loggedPagesShowing: false,
  unloggedPageShowing: true,
}, action) => {
  switch (action.type) {
    case types.SHOW_LOGGED_PAGES:
      return {
        ...resetState,
        loggedPagesShowing: true,
      };
    case types.SHOW_UNLOGGED_PAGE:
      return {
        ...resetState,
        unloggedPageShowing: true,
      };
    case types.SHOW_LOGIN_PAGE:
      return {
        ...resetState,
        loginPageShowing: true,
      };
    default:
      return state;
  }
};

export default mainPages;
