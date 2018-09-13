import React, { Component } from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import Tweets from './Tweets';

const TweetsContainerStyle = {
  position: 'absolute',
  top: '50px',
  left: '25%',
  width: '500px',
  zIndex: '3',
};
const Thread = () => {
  return(
    <div style={TweetsContainerStyle}>
      <Tweets />
    </div>
  );
}
class Home extends Component {
  state = {
    showThread: false,
  }
  render() {
    return (
      <div>
        <Header />
        <HomeBody />
        {this.state.showThread ? <Thread /> : null}
      </div>
    );
  }
}

export default Home;
