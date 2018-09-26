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
    const {
      showThread,
      followingShowing,
      followersShowing,
      homePageShowing,
      tweetsShowing,
      followSomeone,
      setUserOnSight,
      userOnSight,
      setThreadId,
    } = this.props;
    return (
      <div style={ContainerStyle}>
        {homePageShowing ? (
          <TweetsSpace
            showThread={showThread}
            homePageShowing={homePageShowing}
            userName={userOnSight}
            setThreadId={setThreadId}
          />
        ) : null}
        {tweetsShowing ? (
          <TweetsSpace
            showThread={showThread}
            tweetsShowing={tweetsShowing}
            userName={userOnSight}
            setThreadId={setThreadId}
          />
        ) : null}
        {followersShowing ? (
          <UsersSpace
            typeOfUsers="followers"
            followSomeone={followSomeone}
            userName={userOnSight}
            setUserOnSight={setUserOnSight}
          />
        ) : null}
        {followingShowing ? (
          <UsersSpace
            typeOfUsers="following"
            userName={userOnSight}
            setUserOnSight={setUserOnSight}
          />
        ) : null}
      </div>
    );
  }
}

export default HomeBodyRight;
