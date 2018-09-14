import React, { Component } from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import TweetInputBox from './TweetInputBox';

const ContainerStyle = {
  minWidth: '300px',
  backgroundColor: "#000",
  display: 'flex',
  flexDirection: 'column',
};

class TweetsBox extends Component {
  state = {
    hasNewTweets: true,
  }
  render() {
    const { showThread } = this.props;
    return (
      <div style={ ContainerStyle }>
        <TweetInputBox />
        {this.state.hasNewTweets ? <NewTweets /> : null }
        <Tweets showThread={ showThread }/>
      </div>
    );
  }
}

export default TweetsBox;
