import React, { Component } from 'react';
import fetchData from '../common/fetchData';

const ContainerStyle = {
  position: 'relative',
  width: '280px',
  height: '280px',
  boxSizing: 'border-box',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '4px',
  backgroundColor: '#c9d4c6',
};
const HeaderStyle = {
  position: 'absolute',
  top: '80px',
  width: '240px',
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
const FooterStyle = {
  position: 'absolute',
  bottom: '15px',
  left: '18px',
  height: '80px',
  display: 'flex',
  flexDirection: 'row',
};
const InfoBoxStyle = {
  backgroundColor: 'inherit',
  textAlign: 'center',
  border: 'none',
  margin: '10px',
};
const InfoBox = ({ lable, number }) => {
  return (
    <button style={ InfoBoxStyle }>
      <p>{ lable }</p>
      <p>{ number }</p>
    </button>
  );
};

class UserBox extends Component {
  state = {
    tweets: 0,
    following: 0,
    followers: 0,
    userName: '',
    name: '',
    picture: '',
  }
  componentDidMount() {
    fetchData(`/api/user/info`, 'GET').then((res) => {
      if (res) {
        this.setState({
          tweets: res.numberOfTweets,
          following: res.followingNumber,
          followers: res.numberOfFollowers,
          userName: res.profile.userName,
          name: res.profile.name,
          picture: res.profile.picture,
        });
      }
    });
  }
  render() {
    const {
      tweets,
      following,
      followers,
      userName,
      name,
      picture,
    } = this.state;
    
    return (
      <div style={ ContainerStyle }>
        <div style={ HeaderStyle }>
          <div style={ UserPictureStyle }>{ picture }</div>
          <div style={ NameStyle }>{ name }</div>
          <div style={ NickNameStyle }>{ userName }</div>
        </div>
        <div style={ FooterStyle}>
          <InfoBox lable='Tweets' number={tweets}/>
          <InfoBox lable='Following' number={following}/>
          <InfoBox lable='Followers' number={followers}/>
        </div>
      </div>
    );
  }
}

export default UserBox;