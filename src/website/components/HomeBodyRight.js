import React, { Component } from 'react';
import TweetsSpace from './TweetsSpace';

const ContainerStyle = {
  minWidth: '300px',
  position: 'absolute',
  top: '80px',
  left: '360px',
  right: '60px',
  backgroundColor: '#00f',
};

class HomeBodyRight extends Component {
  render() {
    const { showThread } = this.props;
    return (
      <div style={ ContainerStyle }>
        <TweetsSpace showThread={ showThread }/>
      </div>
    );
  }
}

export default HomeBodyRight;
