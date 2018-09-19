import { connect } from 'react-redux';
import App from '../App';
import {
  createTweet,
  searchTwitter,
  showTweets,
  showFollowing,
  showFollowers,
  showHomePage,
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
  tweetsShowing: state.view.tweetsShowing,
  followingShowing: state.view.followingShowing,
  followersShowing: state.view.followersShowing,
  homePageShowing: state.view.homePageShowing,
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
  showTweets: () => dispatch(showTweets()),
  showHomePage: () => dispatch(showHomePage()),
  showFollowing: () => dispatch(showFollowing()),
  showFollowers: () => dispatch(showFollowers()),
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
