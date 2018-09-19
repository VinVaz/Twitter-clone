export const SHOW_TWEETS = 'SHOW_TWEETS';
export const SHOW_FOLLOWING = 'SHOW_FOLLOWING';
export const SHOW_FOLLOWERS = 'SHOW_FOLLOWERS';
export const SHOW_HOMEPAGE = 'SHOW_HOMEPAGE';
export const CREATE_TWEET = 'CREATE_TWEET';
export const SEARCH_TWITTER = 'SEARCH_TWITTER';
export const LIKE_TWEET = 'LIKE_TWEET';
export const REPLY_TWEET = 'REPLY_TWEET';
export const RETWEET = 'RETWEET';
export const FOLLOW_SOMEONE = 'FOLLOW_SOMEONE';
export const SHOW_THREAD = 'GET_THREAD';
export const HANDLE_NEWTWEETS = 'HANDLE_NEWTWEETS';
export const HANDLE_PROFILEBOX = 'HANDLE_PROFILEBOX';
export const SHOW_BACKGROUND = 'HIDE_BACKGROUND';
export const SHOW_CREATENEWTWEET = 'SHOW_CREATENEWTWEET';

export const showCreateNewTweet = () => ({
  type: SHOW_CREATENEWTWEET,
});
export const showBackground = () => ({
  type: SHOW_BACKGROUND,
});
export const showThread = () => ({
  type: SHOW_THREAD,
});
export const handleNewTweets = () => ({
  type: HANDLE_NEWTWEETS,
});
export const handleProfileBox = () => ({
  type: HANDLE_PROFILEBOX,
});
export const showTweets = () => ({
  type: SHOW_TWEETS,
});
export const showHomePage = () => ({
  type: SHOW_HOMEPAGE,
});
export const showFollowing = () => ({
  type: SHOW_FOLLOWING,
});
export const showFollowers = () => ({
  type: SHOW_FOLLOWERS,
});
export const createTweet = text => ({
  type: CREATE_TWEET,
  text,
});
export const searchTwitter = name => ({
  type: SEARCH_TWITTER,
  name,
});
export const likeTweet = () => ({
  type: LIKE_TWEET,
});
export const replyTweet = () => ({
  type: REPLY_TWEET,
});
export const retweet = () => ({
  type: RETWEET,
});
export const followSomeone = () => ({
  type: FOLLOW_SOMEONE,
});
