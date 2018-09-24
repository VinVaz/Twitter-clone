import * as types from '../actions/index';

export const user = (state = {
  loggedUser: '@juaOrtg',
  userOnSight: '@juaOrtg',
}, action) => {
  switch (action.type) {
    case types.SHOW_HOMEPAGE:
      return {
        ...state,
        userOnSight: state.loggedUser,
      };
    case types.SET_USER_ON_SIGHT:
      return {
        ...state,
        userOnSight: action.userName,
      };
    case types.SET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.userName,
      };
    default:
      return state;
  }
};
