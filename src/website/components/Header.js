import React, { Component } from 'react';
import HeaderSearcher from './HeaderSearcher';
import HeaderProfileButton from './HeaderProfileButton';
import HeaderTweetButton from './HeaderTweetButton';
import HeaderHomeButton from './HeaderHomeButton';

const HeaderStyle = {
  boxSizing:'border-box',
  height: '60px',
  backgroundColor: '#0000a7',
  padding: '5px',
  display: 'flex',
  alignItems: 'stretch',
};
const SearchStyle = {
  width: '50%',
  backgroundColor: '#1060a7',
};
const TweetBoxStyle = {
  width: '12%',
  backgroundColor: '#b06017',
};
const HomeBoxStyle = {
  width: '26%',
  backgroundColor: '#a0a017',
};
const ProfileBoxStyle = {
  width: '12%',
  backgroundColor: '#006017',
};

class Header extends Component {
  render() {
    return (
      <div style={ HeaderStyle }>
        <div style={HomeBoxStyle}>
          <HeaderHomeButton/>
        </div>
        <div style={SearchStyle}>
          <HeaderSearcher />
        </div>
        <div style={ProfileBoxStyle}>
          <HeaderProfileButton/>
        </div>
        <div style={TweetBoxStyle}>
          <HeaderTweetButton/>
        </div>
      </div>
    );
  }
}

export default Header;
