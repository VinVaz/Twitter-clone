import React, { Component } from 'react';
import UserBox from './UserBox';

const UserSpaceStyle = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
}

class UserSpace extends Component {
  render() {
    return (
      <div style={ UserSpaceStyle }>
        <UserBox />
      </div>
    );
  }
}

export default UserSpace;
