import React, { Component } from 'react';

class HeaderHomeButton extends Component {
  render() {
    const { showHomePage } = this.props;
    return (<button onClick={showHomePage}>Home</button>);
  }
}

export default HeaderHomeButton;
