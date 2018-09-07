import React, { Component } from 'react';

const UserBoxStyle = {
  width: '100%',
  height: '300px',
  boxSizing: 'border-box',
  padding: '10px',
  marginBottom: '20px',
  backgroundColor: '#aabae5',
}

class UserBox extends Component {
  render() {
    return (
      <div style={UserBoxStyle}>
        <p>tweets</p>
      </div>
    );
  }
}

export default UserBox;