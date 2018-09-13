import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import TweetInputBox from './TweetInputBox';

const ContainerStyle = {
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
};

class TweetsBox extends Component {
  state = {
    hasNewTweets: true,
  }
  render() {
    return (
      <div style={ ContainerStyle }>
        <TweetInputBox />
        {this.state.hasNewTweets ? <NewTweets /> : null }
        <Tweets />
      </div>
    );
  }
}

export default TweetsBox;
