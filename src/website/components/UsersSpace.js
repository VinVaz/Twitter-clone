import React, { Component } from 'react';
import UserBox from './UserBox';
import fetchData from '../common/fetchData';

const ContainerStyle = {
  width: '600px',
};

class UsersSpace extends Component {
  state = {
    users : {},
  }
  componentDidMount() {
    fetchData(`/api/user/followers/info`, 'GET').then((res) => {
      this.setState({
        users: res,
      });
    });
  }
  generateUserBoxes() {
    const { users } = this.state;
    let myUsers = [];
    //await until the profile's object is ready
    if (users[0]) {
      for(let i = 0; i < users.length; i++){
        myUsers.push(<UserBox user={users[i]} key={i} />);
      }
      return myUsers;
    } else {
      return null;
    } 
  }
  render() {
    return (
      <div style={ ContainerStyle }>
        { this.generateUserBoxes() }
      </div>
    );
  }
}

export default UsersSpace;
