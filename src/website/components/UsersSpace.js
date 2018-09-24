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
  fetchUserInfo = () => {
    const { typeOfUsers, userName } = this.props;
    fetchData(`/api/${ userName }/${ typeOfUsers }/info`, 'GET').then((res) => {
      this.setState({
        users: res,
      });
    });
  }
  componentDidMount() {
    this.fetchUserInfo();
  }
  componentDidUpdate(prevProps) {
    if (this.props.userName !== prevProps.userName) {
      this.fetchUserInfo();
    }
  }
  generateUserBoxes() {
    const { users } = this.state;
    const { followSomeone, setUserOnSight } = this.props;
    let myUsers = [];
    //await until the profile's object inside users is ready
    if (users[0]) {
      for(let i = 0; i < users.length; i++){
        myUsers.push(
          <UserBox 
            user={users[i]} 
            key={i} 
            followSomeone={ followSomeone } 
            setUserOnSight={ setUserOnSight }
          />
        );
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
