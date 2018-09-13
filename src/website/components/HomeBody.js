import React, { Component } from 'react';
import Header from './Header';
import UserSpace from './UserSpace';
import TweetsBox from './TweetsBox';

const HomeBodyStyle = {
  padding: '70px 20px 20px 20px',
  backgroundColor: '#f2f3ff',
  display: 'flex',
}

class HomeBody extends Component {
  render() {
    return (
      <div style={ HomeBodyStyle }>
        <UserSpace />
        <TweetsBox />
      </div>
    );
  }
}

export default HomeBody;
