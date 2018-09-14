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
    />);
  }
}

export default App;
