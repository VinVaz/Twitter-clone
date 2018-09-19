import React, { Component } from 'react';
import ProfileUserBox from './ProfileUserBox';

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
        <ProfileUserBox/>
      </div>
    );
  }
}

export default HomeBodyLeft;
