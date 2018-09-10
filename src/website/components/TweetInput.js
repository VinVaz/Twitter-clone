import React, { Component } from 'react';

const TweetInputBoxStyle = {
  backgroundColor: '#aabaa5',
  padding: '10px',
  minHeight: '60px',
};

class TweetInputBox extends Component {
  render() {
    return (
      <div style={ TweetInputBoxStyle }>
        <p>tweet input</p>
        <input placeholder='new tweet'/>
      </div>
    );
  }
}

export default TweetInputBox;