import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import TweetInputBox from './TweetInputBox';

class TweetsSpace extends Component {
  state = {
    hasNewTweets: true,
  }
  TweetsBox() {
    const { showThread, userName } = this.props;
    const myUrl = `/api/${userName}/following/tweets`;
    return (
      <div>
        <TweetInputBox />
        {this.state.hasNewTweets ? <NewTweets /> : null }
        <Tweets 
          showThread={ showThread }
          url = { myUrl }
        />
      </div>
    );
  }
  userTweets() {
    const { showThread, userName } = this.props;
    return (<Tweets 
      showThread={ showThread }
      url = { `/api/${userName}/tweets` }
    />);
  }
  render() {
  const { ownershipOfTweets } = this.props;
    return (
      <div>
        {ownershipOfTweets == 'user' ? this.userTweets() : null}
        {ownershipOfTweets == 'following' ? this.TweetsBox() : null}
      </div>
    );
  }
}

export default TweetsSpace;
