import React, { Component } from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import Tweets from './Tweets';
import CreateNewTweet from './CreateNewTweet';

const ContainerStyle = {
  backgroundColor: '#f2f3ff',
  width: '100vw',
  height: '100vh',
}
const TweetsContainerStyle = {
  position: 'absolute',
  top: '50px',
  left: '25%',
  width: '500px',
  zIndex: '3',
};
const unfocusedStyle = {
  filter: 'brightness(50%)',
  position: 'fixed',
  backgroundColor: 'inherit',
}
const Thread = () => {
  return(
    <div style={TweetsContainerStyle}>
      <Tweets />
    </div>
  );
}
class Home extends Component {
  render() {
    const {
      profileBoxShowing,
      handleProfileBox,
      threadShowing,
      showThread,
      backgroundIsHidden,
      showBackground,
      createNewTweetIsShowing,
      showCreateNewTweet,
    } = this.props;
    return (
      <div style={ ContainerStyle }>
        <div style={ backgroundIsHidden ? unfocusedStyle : null } onClickCapture={showBackground}>
          <Header
            profileBoxShowing={ profileBoxShowing }
            handleProfileBox={ handleProfileBox }
            showCreateNewTweet={ showCreateNewTweet }
          />
          <HomeBody showThread={ showThread } />
        </div>
        {threadShowing ? <Thread /> : null}
        {createNewTweetIsShowing ? <CreateNewTweet /> : null}
      </div>
    );
  }
}

export default Home;
