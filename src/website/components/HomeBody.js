import React, { Component } from 'react';
import HomeBodyLeft from './HomeBodyLeft';
import HomeBodyRight from './HomeBodyRight';

const HomeBodyStyle = {
  position: 'relative',
};

class HomeBody extends Component {
  render() {
    const {
      showThread,
      followSomeone,
      followingShowing,
      followersShowing,
      homePageShowing,
      tweetsShowing,
      showTweets,
      showFollowing,
      showFollowers,
      setUserOnSight,
      userOnSight,
      loggedUser,
      setThreadId,
    } = this.props;
    
    return (
      <div style={HomeBodyStyle}>
        <HomeBodyLeft
          showTweets={showTweets}
          showFollowing={showFollowing}
          showFollowers={showFollowers}
          userOnSight={userOnSight}
        />
        <HomeBodyRight
          showThread={showThread}
          followingShowing={followingShowing}
          followersShowing={followersShowing}
          homePageShowing={homePageShowing}
          tweetsShowing={tweetsShowing}
          followSomeone={followSomeone}
          setUserOnSight={setUserOnSight}
          userOnSight={userOnSight}
          loggedUser={loggedUser}
          setThreadId={setThreadId}
        />
      </div>
    );
  }
}

export default HomeBody;
