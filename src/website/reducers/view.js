import * as types from '../actions/index';

export const view = (state = {
  profileBoxShowing: false,
  threadShowing: false,
  newTweetsButtonShowing: false,
}, action) => {
  switch (action.type) {
    case types.HANDLE_THREAD:
      return {
        ...state,
        threadShowing: !state.threadShowing,
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
