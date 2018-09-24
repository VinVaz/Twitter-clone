import React, { Component } from 'react';
import fetchData from '../common/fetchData';

const ButtonStyle = {
  
};

class FollowButton extends Component {
  state = {
    user : {},
  }
  followUser = () => {
    const { userName, typeOfUsers } = this.props;
    fetchData('/api/user/action/follow', 'POST', {userName}).then((res) => {
      this.setState({
        user: res,
      });
    });
  }
  render() {
    return (
      <button onClick={ this.followUser }>Follow</button>
    );
  }
}

export default FollowButton;