import React, { Component } from 'react';
import fetchData from '../common/fetchData';

const ButtonStyle = {
  
};

class FollowButton extends Component {
  state = {
    users : {},
  }
  componentDidMount() {
    const { userName, typeOfUsers } = this.props;
    fetchData('/api/user/action/follow', 'POST', {userName}).then((res) => {
      this.setState({
        users: res,
      });
    });
  }
  render() {
    return (
      <button>Follow</button>
    );
  }
}

export default FollowButton;