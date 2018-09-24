import React, { Component } from 'react';
import Pages from './components/Pages';

class App extends Component {   
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
      loggedPagesShowing,
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
      showLoggedPages,
      showUnloggedPage,
      setUserOnSight,
      setLoggedUser,
      userOnSight,
      loggedUser,
    } = this.props;

    return (<Pages
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
      loginPageShowing={ loginPageShowing }
      unloggedPageShowing={ unloggedPageShowing }
      showTweets={ showTweets}
      showFollowing={ showFollowing}
      showFollowers={ showFollowers}
      showHomePage={ showHomePage}
      showLoginPage={ showLoginPage }
      showUnloggedPage={ showUnloggedPage }
      loggedPagesShowing= { loggedPagesShowing }
      showLoggedPages={ showLoggedPages }
      followSomeone={ followSomeone }
      setUserOnSight={ setUserOnSight }
      setLoggedUser={ setLoggedUser }
      userOnSight={ userOnSight }
      loggedUser={ loggedUser }
    />);
  }
}

export default App;
