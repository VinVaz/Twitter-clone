import React, { Component } from 'react';
import Header from './Header';

class HeaderSearcher extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Tweet' />
      </form>
    );
  }
}

export default HeaderSearcher;
