import React, { Component } from 'react';

const ContainerStyle = {
  marginBottom: '2px',
  width: '100%',
  border: 'none',
  padding: '15px',
  backgroundColor: '#fffffd',
  minHeight: '100px',
};

const HeaderStyle = {
  display: 'flex',
  margin: '5px',
};
const UserActionStyle = {
  backgroundColor: '#fff',
  margin: '4px',
  textAlign: 'center',
};
const FooterStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const UserAction = ({ name, number }) => {
  return (
    <button style={ UserActionStyle }>
      <span>{ name }</span>
      <span>{ number }</span>
    </button>
  );
};
//hard coded text:
const randomText = `fourewhfirhfouehfoihwrofheorif
              hoerhfouerhfouhweorhforhfoehrf
              oheroufhoieurhfoehrfouh`;
class Tweet extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <div style={ HeaderStyle }>
          <button>picture</button>
          <p>username</p>
        </div>
        <p>{ randomText }</p>
        <div style={ FooterStyle}>
          <UserAction name='Like' number='3'/>
          <UserAction name='Retweet' number='106'/>
          <UserAction name='Replay' number='12'/>
        </div>
      </div>
    );
  }
}

export default Tweet;