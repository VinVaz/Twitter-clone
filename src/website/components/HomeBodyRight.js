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
    } = this.props;
    console.log(homePageShowing)
    return (
      <div style={ ContainerStyle }>
        {homePageShowing ? <TweetsSpace showThread={ showThread }/> : null}
        {followersShowing ? <UsersSpace typeOfUsers={ 'followers' }/> : null}
        {followingShowing ? <UsersSpace typeOfUsers={ 'following' }/> : null}
      </div>
    );
  }
}

export default HomeBodyRight;
