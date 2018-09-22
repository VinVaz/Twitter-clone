import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import TweetInputBox from './TweetInputBox';

class TweetsSpace extends Component {
  state = {
    hasNewTweets: true,
  }
  userTweetsBlock() {
    const { showThread } = this.props;
    return (
      <div>
        <TweetInputBox />
        {this.state.hasNewTweets ? <NewTweets /> : null }
        <Tweets 
          showThread={ showThread }
          url = { '/api/user/tweets' }
        />
      </div>
    );
  }
  userFollowingTweets() {
    const { showThread } = this.props;
    return (<Tweets 
      showThread={ showThread }
      url = { '/api/user/following/tweets' }
    />);
  }
  render() {
  const { ownershipOfTweets } = this.props;
    return (
      <div>
        {ownershipOfTweets == 'user' ? this.userTweetsBlock() : null}
        {ownershipOfTweets == 'following' ? this.userFollowingTweets() : null}
      </div>
    );
  }
}

export default TweetsSpace;
