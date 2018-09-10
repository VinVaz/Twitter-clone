import React, { Component } from 'react';
import Header from './Header';

const SearcherStyle = {
  width: '80%',
  height: '30px',
};
class HeaderSearcher extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Tweet' style={ SearcherStyle }/>
      </form>
    );
  }
}

export default HeaderSearcher;
