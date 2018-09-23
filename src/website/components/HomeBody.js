import React, { Component } from 'react';
import HomeBodyLeft from './HomeBodyLeft';
import HomeBodyRight from './HomeBodyRight';

const HomeBodyStyle = {
  position: 'relative',
}

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
    } = this.props;
    return (
      <div style={ HomeBodyStyle }>
        <HomeBodyLeft
          showTweets={ showTweets}
          showFollowing={ showFollowing}
          showFollowers={ showFollowers}
        />
        <HomeBodyRight 
          showThread={ showThread }
          followingShowing={ followingShowing}
          followersShowing={ followersShowing}
          homePageShowing={ homePageShowing}
          tweetsShowing={ tweetsShowing}
          followSomeone={ followSomeone }
        />
      </div>
    );
  }
}

export default HomeBody;
