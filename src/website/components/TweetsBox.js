import React, { Component } from 'react';

const TweetsBoxStyle = {
  //height is just a test
  height:'1200px',
  width:'70%',
  boxSizing: 'border-box',
  padding: '20px',
  backgroundColor: '#a4d2e2',
}

class TweetsBox extends Component {
  render() {
    return (
      <div style={TweetsBoxStyle}>
        <p>tweets space</p>
      </div>
    );
  }
}

export default TweetsBox;
