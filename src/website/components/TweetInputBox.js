import React, { Component } from 'react';
import TweetInput from './TweetInput'

class TweetInputBox extends Component {
  returnTweetInput() {
    return (
      <div>
        <div>profile</div>
      </div>
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