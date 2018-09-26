import React, { Component } from 'react';

class HeaderTweetButton extends Component {
  render() {
    const { showCreateNewTweet } = this.props;
    return (<button onClick={showCreateNewTweet}>Tweet</button>);
  }
}

export default HeaderTweetButton;
