import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import TweetInputBox from './TweetInputBox';

class TweetsSpace extends Component {
  state = {
    hasNewTweets: true,
  }
  TweetsBox() {
    const { showThread, userName, setThreadId } = this.props;
    const myUrl = `/api/${userName}/following/tweets`;
    return (
      <div>
        <TweetInputBox />
        {this.state.hasNewTweets ? <NewTweets /> : null }
        <Tweets 
          showThread={ showThread }
          setThreadId={setThreadId}
          url = { myUrl }
        />
      </div>
    );
  }
  userTweets() {
    const { showThread, userName, setThreadId } = this.props;
    return (<Tweets 
      showThread={ showThread }
      setThreadId={setThreadId}
      url = { `/api/${userName}/tweets` }
    />);
  }
  render() {
  const { tweetsShowing, homePageShowing } = this.props;
    return (
      <div>
        {tweetsShowing ? this.userTweets() : null}
        {homePageShowing ? this.TweetsBox() : null}
      </div>
    );
  }
}

export default TweetsSpace;
