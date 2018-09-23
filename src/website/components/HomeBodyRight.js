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
    } = this.props;
    return (
      <div style={ ContainerStyle }>
        {homePageShowing ? <TweetsSpace
          showThread={ showThread }
          ownershipOfTweets={ 'user' }
        /> : null}
        {tweetsShowing ? <TweetsSpace 
          showThread={ showThread }
          ownershipOfTweets={ 'following' }
        /> : null}
        {followersShowing ? <UsersSpace typeOfUsers={ 'followers' } followSomeone={ followSomeone }/> : null}
        {followingShowing ? <UsersSpace typeOfUsers={ 'following' }/> : null}
      </div>
    );
  }
}

export default HomeBodyRight;
