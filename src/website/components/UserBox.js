import React, { Component } from 'react';
import FollowButton from './FollowButton';

const ContainerStyle = {
  position: 'relative',
  width: '250px',
  height: '200px',
  boxSizing: 'border-box',
  float: 'left',
  padding: '10px',
  margin: '0 0 10px 10px',
  borderRadius: '4px',
  backgroundColor: '#c9d4c6',
};
const HeaderStyle = {
  position: 'absolute',
  boxSizing: 'border-box',
  top: '80px',
  height: '80px',
  margin: '5px',
};
const UserPictureStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  padding: '4px',
  width: '60px',
  height: '80px',
  backgroundColor: '#565',
};
const NameStyle = {
  position: 'absolute',
  top: '15px',
  left: '80px',
};
const NickNameStyle = {
  position: 'absolute',
  top: '45px',
  left: '80px',
};
class UserBox extends Component {
  render() {
    const { user, followSomeone } = this.props;
    return (
      <div style={ ContainerStyle }>
        <FollowButton followSomeone={ followSomeone } userName={ user.profile.userName}/>
        <div style={ HeaderStyle }>
          <div style={ UserPictureStyle }>{ user.profile.picture }</div>
          <div style={ NameStyle }>{ user.profile.name }</div>
          <div style={ NickNameStyle }>{ user.profile.userName }</div>
        </div>
      </div>
    );
  }
}

export default UserBox;