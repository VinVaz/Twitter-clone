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
export const SHOW_UNLOGGED_PAGE = 'SHOW_UNLOGGED_PAGE';
export const SHOW_LOGIN_PAGE = 'SHOW_LOGIN_PAGE';
export const SHOW_LOGGED_PAGES = 'SHOW_LOGGED_PAGES';
export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const SET_USER_ON_SIGHT = 'SET_USER_ON_SIGHT';
export const SET_THREAD_ID = 'SET_THREAD_ID';

export const setThreadId = id => ({
  type: SET_THREAD_ID,
  id,
});
export const setLoggedUser = userName => ({
  type: SET_LOGGED_USER,
  userName,
});
export const setUserOnSight = userName => ({
  type: SET_USER_ON_SIGHT,
  userName,
});
export const showLoggedPages = () => ({
  type: SHOW_LOGGED_PAGES,
});
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
export const showUnloggedPage = () => ({
  type: SHOW_UNLOGGED_PAGE,
});
export const showLoginPage = () => ({
  type: SHOW_LOGIN_PAGE,
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
