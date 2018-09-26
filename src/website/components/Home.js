import React, { Component } from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import Tweets from './Tweets';
import Thread from './Thread';
import CreateNewTweet from './CreateNewTweet';

const FocusedStyle = {
  backgroundColor: '#f2f3ff',
  position: 'relative',
  width: '100vw',
  height: '100vh',
};
const UnfocusedStyle = {
  filter: 'brightness(50%)',
  position: 'fixed',
  backgroundColor: '#f2f3ff',
  width: '100vw',
  height: '100vh',
};

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
      setUserOnSight,
      userOnSight,
      loggedUser,
      threadId,
      setThreadId,
    } = this.props;
    
    return (
      <div>
        <div style={backgroundIsHidden ? UnfocusedStyle : FocusedStyle} onClickCapture={showBackground}>
          <Header
            profileBoxShowing={profileBoxShowing}
            handleProfileBox={handleProfileBox}
            showCreateNewTweet={showCreateNewTweet}
            showHomePage={showHomePage}
            showUnloggedPage={showUnloggedPage}
          />
          <HomeBody
            showThread={showThread}
            followingShowing={followingShowing}
            followersShowing={followersShowing}
            tweetsShowing={tweetsShowing}
            homePageShowing={homePageShowing}
            showTweets={showTweets}
            showFollowing={showFollowing}
            showFollowers={showFollowers}
            followSomeone={followSomeone}
            setUserOnSight={setUserOnSight}
            userOnSight={userOnSight}
            loggedUser={loggedUser}
            setThreadId={setThreadId}
          />
        </div>
        {threadShowing ? <Thread threadId={threadId}/> : null}
        {createNewTweetIsShowing ? <CreateNewTweet /> : null}
      </div>
    );
  }
}

export default Home;
