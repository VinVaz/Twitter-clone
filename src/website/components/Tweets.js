import React, { Component } from 'react';
import Tweet from './Tweet';

const ContainerStyle = {
  backgroundColor: '#ababab',
  width: '100%',
};
class Tweets extends Component {
  generateTweets() {
    const { showThread } = this.props;
    let tweets = []
    for(let i = 0; i < 5; i++){
      tweets.push(<Tweet showThread={ showThread }/>)
    }
    return tweets;
  }
  render() {
    return (
      <div style={ ContainerStyle }>
        { this.generateTweets() }
      </div>
    );
  }
}

export default Tweets;