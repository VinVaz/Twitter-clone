import React, { Component } from 'react';
import TweetInputBox from './TweetInputBox';

const ContainerStyle = {
  position: 'absolute',
  top: '150px',
  left: '250px',
  width: '600px',
};
const headerStyle = {
  height: '20px',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#fff',
};
class CreateNewTweet extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <div style={ headerStyle }>Compose a new Tweet</div>
        <TweetInputBox />
      </div>
    );
  }
}

export default CreateNewTweet;