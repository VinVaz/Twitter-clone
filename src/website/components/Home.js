import React, { Component } from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import Tweets from './Tweets';
import CreateNewTweet from './CreateNewTweet';
import Login from './Login';
import Unlogged from './Unlogged';

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
      followSomeone,
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
      showUnloggedPage,
    } = this.props;
    return (
      <div>
        <div style={ backgroundIsHidden ? UnfocusedStyle : FocusedStyle } onClickCapture={showBackground}>
          <Header
            profileBoxShowing={ profileBoxShowing }
            handleProfileBox={ handleProfileBox }
            showCreateNewTweet={ showCreateNewTweet }
            showHomePage={ showHomePage}
            showUnloggedPage={ showUnloggedPage }
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
            followSomeone={ followSomeone }
          />
        </div>
        {false ? <Unlogged /> : null}
        {false ? <Login /> : null}
        {threadShowing ? <Thread /> : null}
        {createNewTweetIsShowing ? <CreateNewTweet /> : null}
      </div>
    );
  }
}

export default Home;
