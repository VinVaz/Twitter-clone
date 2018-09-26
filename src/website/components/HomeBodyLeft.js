import React, { Component } from 'react';
import ProfileUserBox from './ProfileUserBox';

const HomeBodyLeftStyle = {
  position: 'absolute',
  left: '50px',
  top: '100px',
  width: '280px',
};

class HomeBodyLeft extends Component {
  render() {
    const {
      showTweets,
      showFollowing,
      showFollowers,
      userOnSight,
    } = this.props;
    return (
      <div style={HomeBodyLeftStyle}>
        <ProfileUserBox
          showTweets={showTweets}
          showFollowing={showFollowing}
          showFollowers={showFollowers}
          userOnSight={userOnSight}
        />
      </div>
    );
  }
}

export default HomeBodyLeft;
