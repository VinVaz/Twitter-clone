import React, { Component } from 'react';
import Tweet from './Tweet';

const ContainerStyle = {
  backgroundColor: '#ababab'
};
class Tweets extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    );
  }
}

export default Tweets;