import React, { Component } from 'react';

const NewTweetsStyle = {
  width: '100%',
  height: '35px',
  border: 'none',
};

class NewTweets extends Component {
  render() {
    return (
      <div>
        <button style={NewTweetsStyle}>new tweets</button>
      </div>
    );
  }
}

export default NewTweets;
