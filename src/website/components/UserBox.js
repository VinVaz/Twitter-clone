import React, { Component } from 'react';
import fetchData from '../common/fetchData';

const ContainerStyle = {
  position: 'relative',
  width: '280px',
  height: '280px',
  boxSizing: 'border-box',
  padding: '10px',
  marginBottom: '20px',
  backgroundColor: '#c9d4c6',
};
const HeaderStyle = {
  position: 'absolute',
  top: '30%',
  display: 'flex',
  margin: '5px',
};
const FooterStyle = {
  position: 'absolute',
  bottom: '15px',
  left: '18px',
  display: 'flex',
  flexDirection: 'row',
};
const InfoBoxStyle = {
  backgroundColor: 'inherit',
  textAlign: 'center',
  border: 'none',
  margin: '10px',
};
const InfoBox = ({ name, number }) => {
  return (
    <button style={ InfoBoxStyle }>
      <p>{ name }</p>
      <p>{ number }</p>
    </button>
  );
};

class UserBox extends Component {
  state = {
    tweets : 0,
    following: 0,
    followers: 0,
  }
  componentDidMount() {
    fetchData('/api/user', 'GET').then((res) => {
      if (res) {
        this.setState({
          tweets: res.publicInfo.numberOfTweets,
          following: res.publicInfo.followingNumber,
          followers: res.publicInfo.numberOfFollowers,
        });
      }
    });
  }
  render() {
    return (
      <div style={ ContainerStyle }>
        <div style={ HeaderStyle }>
          <button>picture</button>
          <p>username</p>
        </div>
        <div style={ FooterStyle}>
          <InfoBox name='Tweets' number={this.state.tweets}/>
          <InfoBox name='Following' number={this.state.following}/>
          <InfoBox name='Followers' number={this.state.followers}/>
        </div>
      </div>
    );
  }
}

export default UserBox;