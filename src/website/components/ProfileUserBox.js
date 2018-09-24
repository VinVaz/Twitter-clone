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
const InfoBox = ({ lable, number, action }) => {
  return (
    <button style={ InfoBoxStyle } onClick={ action }>
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
  fetchUserInfo = () => {
    const { userOnSight } = this.props;
    fetchData(`/api/${userOnSight}/info`, 'GET').then((res) => {
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
  componentDidMount() {
    this.fetchUserInfo();
  }
  componentDidUpdate(prevProps) {
    if (this.props.userOnSight !== prevProps.userOnSight) {
      this.fetchUserInfo();
    }
  }
  render() {
    const {
      tweets,
      following,
      followers,
      userName,
      name,
      picture,
      userOnSight
    } = this.state;

    const {
      showTweets,
      showFollowing,
      showFollowers,
    } = this.props;
    
    return (
      <div style={ ContainerStyle }>
        <div style={ HeaderStyle }>
          <div style={ UserPictureStyle }>{ picture }</div>
          <div style={ NameStyle }>{ name }</div>
          <div style={ NickNameStyle }>{ userName }</div>
        </div>
        <div style={ FooterStyle}>
          <InfoBox lable='Tweets' number={tweets} action={ showTweets }/>
          <InfoBox lable='Following' number={following} action={ showFollowing }/>
          <InfoBox lable='Followers' number={followers} action={ showFollowers }/>
        </div>
      </div>
    );
  }
}

export default UserBox;