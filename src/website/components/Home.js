import React, { Component } from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import Tweets from './Tweets';
import CreateNewTweet from './CreateNewTweet';

const FocusedStyle = {
  backgroundColor: '#f2f3ff',
  position: 'relative',
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
const UnfocusedStyle = {
  filter: 'brightness(50%)',
  position: 'fixed',
  backgroundColor: '#f2f3ff',
  width: '100vw',
  height: '100vh',
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
      followingShowing,
      followersShowing,
      homePageShowing,
      tweetsShowing,
      showTweets,
      showFollowing,
      showFollowers,
      showHomePage,
    } = this.props;
    return (
      <div>
        <div style={ backgroundIsHidden ? UnfocusedStyle : FocusedStyle } onClickCapture={showBackground}>
          <Header
            profileBoxShowing={ profileBoxShowing }
            handleProfileBox={ handleProfileBox }
            showCreateNewTweet={ showCreateNewTweet }
            showHomePage={ showFollowers}
          />
          <HomeBody 
            showThread={ showThread }
            followingShowing={ followingShowing}
            followersShowing={ followersShowing}
            tweetsShowing={ tweetsShowing}
            homePageShowing={ homePageShowing}
            showTweets={ showTweets}
            showFollowing={ showFollowing}
            showFollowers={ showFollowers}
          />
        </div>
        {threadShowing ? <Thread /> : null}
        {createNewTweetIsShowing ? <CreateNewTweet /> : null}
      </div>
    );
  }
}

export default Home;
