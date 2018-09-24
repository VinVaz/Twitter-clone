import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Unlogged from './Unlogged';

class Pages extends Component {
  render() {
    const {
      profileBoxShowing,
      handleProfileBox,
      threadShowing,
      showThread,
      followSomeone,
      backgroundIsHidden,
      showBackground,
      showCreateNewTweet,
      createNewTweetIsShowing,
      loginPageShowing,
      unloggedPageShowing,
      followingShowing,
      followersShowing,
      homePageShowing,
      tweetsShowing,
      showTweets,
      showFollowing,
      showFollowers,
      showHomePage,
      showLoginPage,
      showUnloggedPage,
      showLoggedPages,
      loggedPagesShowing,
      setUserOnSight,
      userOnSight,
      loggedUser,
    } = this.props;
    
    return (
      <div>
        {unloggedPageShowing ? <Unlogged 
          showLoginPage={showLoginPage}
        /> : null}
        {loginPageShowing ? <Login
          showLoggedPages={ showLoggedPages }
        /> : null}
        {loggedPagesShowing ? <Home
          profileBoxShowing={ profileBoxShowing }
          handleProfileBox={ handleProfileBox }
          threadShowing={ threadShowing }
          showThread= { showThread }
          backgroundIsHidden = { backgroundIsHidden }
          showBackground={ showBackground }
          showCreateNewTweet={ showCreateNewTweet }
          createNewTweetIsShowing={ createNewTweetIsShowing }
          followingShowing={ followingShowing}
          followersShowing={ followersShowing}
          homePageShowing={ homePageShowing}
          tweetsShowing={ tweetsShowing}
          showHomePage={ showHomePage}
          showTweets={ showTweets}
          showFollowing={ showFollowing}
          showFollowers={ showFollowers}
          showUnloggedPage={ showUnloggedPage }
          followSomeone={ followSomeone }
          setUserOnSight={ setUserOnSight }
          userOnSight={ userOnSight }
          loggedUser={ loggedUser }
        /> : null}
      </div>
    );
  }
}

export default Pages;
