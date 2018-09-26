import React, { Component } from 'react';

const SearcherStyle = {
  width: '80%',
  height: '30px',
  paddingLeft: '15px',
};
class HeaderSearcher extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Tweet" style={SearcherStyle} />
      </form>
    );
  }
}

export default HeaderSearcher;
