import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import TweetInputBox from './TweetInputBox';

class TweetsSpace extends Component {
  state = {
    hasNewTweets: true,
  }
  render() {
    const { showThread } = this.props;
    return (
      <div>
        <TweetInputBox />
        {this.state.hasNewTweets ? <NewTweets /> : null }
        <Tweets showThread={ showThread }/>
      </div>
    );
  }
}

export default TweetsSpace;
