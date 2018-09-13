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
  handleThread,
  handleNewTweets,
  handleProfileBox,
} from '../actions';

const mapStateToProps = state => ({
  tweet: state.tweet,
  search: state.search,
  showTweets: state.user.showTweets,
  showWhoFollowing: state.user.showWhoFollowing,
  showFollowers: state.user.showFollowers,
  likeButtonPressed: state.interaction.likeButtonPressed,
  replayTweetPressed: state.interaction.replayTweetPressed,
  retweetPressed: state.interaction.retweetPressed,
  followButtonPressed: state.interaction.followButtonPressed,
  threadShowing: state.view.threadShowing,
  newTweetsButtonShowing: state.view.newTweetsButtonShowing,
  profileBoxShowing: state.view.profileBoxShowing,
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
  handleThread: () => dispatch(handleThread()),
  handleNewTweets: () => dispatch(handleNewTweets()),
  handleProfileBox: () => dispatch(handleProfileBox()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
