import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweet from './Tweet';
import TweetInputBox from './TweetInputBox';

const TweetsBoxStyle = {
  backgroundColor: '#ababab',
  boxSizing: 'border-box',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
};

class TweetsBox extends Component {
  render() {
    return (
      <div style={ TweetsBoxStyle }>
        <TweetInputBox />
        <NewTweets />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    );
  }
}

export default TweetsBox;
