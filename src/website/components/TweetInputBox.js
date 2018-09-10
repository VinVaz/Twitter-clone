import React, { Component } from 'react';
import TweetInput from './TweetInput'

class TweetInputBox extends Component {
  returnTweetInput() {
    return (
      <p>simplified version</p>
    );
  }
  render() {
    return (
      <div>
        <TweetInput />
      </div>
    );
  }
}

export default TweetInputBox;