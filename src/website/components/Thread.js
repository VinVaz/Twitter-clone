import React, { Component } from 'react';
import TweetInputBox from './TweetInputBox';
import Tweets from './Tweets';

const ContainerStyle = {
  backgroundColor: '#ababab',
  position: 'absolute',
  top: '100px',
  left: '250px',
  width: '600px',
};

class Thread extends Component {
  
  render() {
    const { threadId } = this.props;
  const myUrl = `api/thread/${ threadId }/replies`;
    return (
      <div style={ContainerStyle}>
        <TweetInputBox />
        <Tweets url = { myUrl } />
      </div>
    );
  }
}

export default Thread;
