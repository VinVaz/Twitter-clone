import React, { Component } from 'react';
import Header from './Header';

class HeaderProfileButton extends Component {
  render() {
  const { handleProfileBox } = this.props;
    return (<button onClick = { () => handleProfileBox() }>Profile</button>);
  }
}

export default HeaderProfileButton;
