import * as types from '../actions/index';

export const interaction = (state = {
  likeButtonPressed: false,
  replyTweetPressed: false,
  retweetPressed: false,
  followButtonPressed: false,
}, action) => {
  switch (action.type) {
    case types.LIKE_TWEET:
      return {
        ...state,
        likeButtonPressed: !state.likeButtonPressed,
      };
    case types.REPLY_TWEET:
      return {
        ...state,
        replyTweetPressed: !state.replyTweetPressed,
      };
    case types.RETWEET:
      return {
        ...state,
        retweetPressed: !state.retweetPressed,
      };
    case types.FOLLOW_SOMEONE:
      return {
        ...state,
        followButtonPressed: !state.followButtonPressed,
      };
    default:
      return state;
  }
};
