import React, { Component } from 'react';
import UserBox from './UserBox';

const HomeBodyLeftStyle = {
  position: 'absolute',
  left: '50px',
  top: '100px',
  width: '280px',
}

class HomeBodyLeft extends Component {
  render() {
    return (
      <div style={ HomeBodyLeftStyle }>
        <UserBox />
      </div>
    );
  }
}

export default HomeBodyLeft;
