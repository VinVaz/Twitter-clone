import React, { Component } from 'react';

const ContainerStyle = {
  marginBottom: '2px',
  width: '100%',
  border: 'none',
  boxSizing: 'border-box',
  padding: '15px',
  backgroundColor: '#fffffd',
  minHeight: '100px',
};

const HeaderStyle = {
  display: 'flex',
  margin: '5px',
};
const UserActionStyle = {
  backgroundColor: 'inherit',
  margin: '4px',
  textAlign: 'center',
  border: 'none',
};
const FooterStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const UserAction = ({ name, number }) => (
  <button style={UserActionStyle}>
    <span>{ name }</span>
    <span>{ ' ' }</span>
    <span>{ number }</span>
  </button>
);
class Tweet extends Component {
  makeThreadActive = () => {
    const { showThread, tweet, setThreadId } = this.props;
    setThreadId(tweet._id);
    showThread();
  }
  render() {
    const { tweet } = this.props;
    return (
      <div style={ContainerStyle} onClick={this.makeThreadActive}>
        <div style={HeaderStyle}>
          <button>picture</button>
          <p>username</p>
        </div>
        <p>{ tweet.content }</p>
        <div style={FooterStyle}>
          <UserAction name="Like" number={tweet.likes} />
          <UserAction name="Retweet" number={tweet.numberOfRetweets} />
          <UserAction name="Reply" number={tweet.numberOfReplies} />
        </div>
      </div>
    );
  }
}

export default Tweet;
