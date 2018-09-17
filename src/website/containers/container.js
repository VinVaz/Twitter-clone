import { connect } from 'react-redux';
import App from '../App';
import {
  createTweet,
  searchTwitter,
  getTweets,
  getFollowing,
  getFollowers,
  likeTweet,
  replyTweet,
  retweet,
  followSomeone,
  showThread,
  handleNewTweets,
  handleProfileBox,
  showBackground,
  showCreateNewTweet,
} from '../actions';

const mapStateToProps = state => ({
  tweet: state.tweet,
  search: state.search,
  showTweets: state.user.showTweets,
  showWhoFollowing: state.user.showWhoFollowing,
  showFollowers: state.user.showFollowers,
  likeButtonPressed: state.interaction.likeButtonPressed,
  replyTweetPressed: state.interaction.replyTweetPressed,
  retweetPressed: state.interaction.retweetPressed,
  followButtonPressed: state.interaction.followButtonPressed,
  threadShowing: state.view.threadShowing,
  newTweetsButtonShowing: state.view.newTweetsButtonShowing,
  profileBoxShowing: state.view.profileBoxShowing,
  backgroundIsHidden: state.view.backgroundIsHidden,
  createNewTweetIsShowing: state.view.createNewTweetIsShowing,
});
const mapDispatchToProps = dispatch => ({
  createTweet: text => dispatch(createTweet(text)),
  searchTwitter: text => dispatch(searchTwitter(text)),
  getTweets: () => dispatch(getTweets()),
  getFollowing: () => dispatch(getFollowing()),
  getFollowers: () => dispatch(getFollowers()),
  likeTweet: () => dispatch(likeTweet()),
  replyTweet: () => dispatch(replyTweet()),
  retweet: () => dispatch(retweet()),
  followSomeone: () => dispatch(followSomeone()),
  showThread: () => dispatch(showThread()),
  handleNewTweets: () => dispatch(handleNewTweets()),
  handleProfileBox: () => dispatch(handleProfileBox()),
  showBackground: () => dispatch(showBackground()),
  showCreateNewTweet: () => dispatch(showCreateNewTweet()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
