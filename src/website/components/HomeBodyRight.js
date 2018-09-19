import React, { Component } from 'react';
import TweetsSpace from './TweetsSpace';
import UsersSpace from './UsersSpace';

const ContainerStyle = {
  minWidth: '300px',
  position: 'absolute',
  top: '80px',
  left: '360px',
  right: '60px',
};

class HomeBodyRight extends Component {
  render() {
    const { showThread } = this.props;
    return (
      <div style={ ContainerStyle }>
        {false ? <TweetsSpace showThread={ showThread }/> : null}
        {true ? <UsersSpace /> : null}
      </div>
    );
  }
}

export default HomeBodyRight;
