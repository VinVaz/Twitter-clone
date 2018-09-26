import React, { Component } from 'react';
import HeaderSearcher from './HeaderSearcher';
import HeaderProfileButton from './HeaderProfileButton';
import HeaderTweetButton from './HeaderTweetButton';
import HeaderHomeButton from './HeaderHomeButton';
import ProfileView from './ProfileView';

const ContainerStyle = {
  position: 'fixed',
  boxSizing: 'border-box',
  height: '50px',
  backgroundColor: '#4f5368',
  padding: '5px',
  display: 'flex',
  zIndex: '1',
};
const HomeBoxStyle = {
  width: '120px',
  flexShrink: '0',
  textAlign: 'center',
  margin: 'auto',
};
const SearchBoxStyle = {
  minWidth: '300px',
  width: '58vw',
  textAlign: 'center',
  flexShrink: '1',
  margin: 'auto',
};
const ProfileBoxStyle = {
  width: '15vw',
  minWidth: '100px',
  textAlign: 'center',
  margin: 'auto',
};
const TweetBoxStyle = {
  width: '15vw',
  minWidth: '100px',
  textAlign: 'center',
  margin: 'auto',
};

class Header extends Component {
  render() {
    const {
      profileBoxShowing,
      handleProfileBox,
      showCreateNewTweet,
      showUnloggedPage,
      showHomePage,
    } = this.props;

    return (
      <div style={ContainerStyle}>
        <div style={HomeBoxStyle}>
          <HeaderHomeButton showHomePage={showHomePage} />
        </div>
        <div style={SearchBoxStyle}>
          <HeaderSearcher />
        </div>
        <div style={ProfileBoxStyle}>
          <HeaderProfileButton handleProfileBox={handleProfileBox} />
          {profileBoxShowing ? (
            <ProfileView
              showUnloggedPage={showUnloggedPage}
            />
          ) : null }
        </div>
        <div style={TweetBoxStyle}>
          <HeaderTweetButton showCreateNewTweet={showCreateNewTweet} />
        </div>
      </div>
    );
  }
}

export default Header;
