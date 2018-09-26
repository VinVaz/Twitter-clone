import * as types from '../actions/index';

const threadId = (state = '', action) => {
  console.log(state)
  switch (action.type) {
    case types.SET_THREAD_ID:
      return action.id;
    default:
      return state;
  }
};

export default threadId;
