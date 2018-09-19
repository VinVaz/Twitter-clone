import React, { Component } from 'react';
import Home from './components/Home';

class App extends Component {   
  render() {
    const {
      profileBoxShowing,
      handleProfileBox,
      threadShowing,
      showThread,
      backgroundIsHidden,
      showBackground,
      showCreateNewTweet,
      createNewTweetIsShowing,
      followingShowing,
      followersShowing,
      homePageShowing,
      tweetsShowing,
      showTweets,
      showFollowing,
      showFollowers,
      showHomePage,
    } = this.props;

    return (<Home
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
      showTweets={ showTweets}
      showFollowing={ showFollowing}
      showFollowers={ showFollowers}
      showHomePage={ showFollowers}
    />);
  }
}

export default App;
