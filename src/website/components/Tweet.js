import React, { Component } from 'react';

const ContainerStyle = {
  marginBottom: '2px',
  width: '100%',
  border: 'none',
  boxSizing: 'border-box',
  padding: '15px',
  backgroundColor: '#fffffd',
  minHeight: '100px',
};

const HeaderStyle = {
  display: 'flex',
  margin: '5px',
};
const UserActionStyle = {
  backgroundColor: 'inherit',
  margin: '4px',
  textAlign: 'center',
  border: 'none',
};
const FooterStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const UserAction = ({ name, number }) => {
  return (
    <button style={ UserActionStyle }>
      <span>{ name }</span>
      <span>{ ' ' }</span>
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
    const { showThread } = this.props;
    return (
      <div style={ ContainerStyle } onClick = {() => showThread()}>
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