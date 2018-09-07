import React, { Component } from 'react';
import Header from './Header';
import UserSpace from './UserSpace';
import TweetsBox from './TweetsBox';

const HomeBodyStyle = {
  boxSizing: 'border-box',
  padding: '20px',
  backgroundColor: '#e4a212',
  display: 'flex',
}

class HomeBody extends Component {
  render() {
    return (
      <div style={HomeBodyStyle}>
        <UserSpace />
        <TweetsBox />
      </div>
    );
  }
}

export default HomeBody;
