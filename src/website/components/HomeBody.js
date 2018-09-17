import React, { Component } from 'react';
import HomeBodyLeft from './HomeBodyLeft';
import HomeBodyRight from './HomeBodyRight';

const HomeBodyStyle = {
  position: 'relative',
}

class HomeBody extends Component {
  render() {
    const { showThread } = this.props;
    return (
      <div style={ HomeBodyStyle }>
        <HomeBodyLeft />
        <HomeBodyRight showThread={ showThread }/>
      </div>
    );
  }
}

export default HomeBody;
