import React, { Component } from 'react';

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
  render() {
    return (
      <div style={ ContainerStyle }>
        <div style={ HeaderStyle }>
          <button>picture</button>
          <p>username</p>
        </div>
        <div style={ FooterStyle}>
          <InfoBox name='Tweets' number='3'/>
          <InfoBox name='Following' number='106'/>
          <InfoBox name='Followers' number='12'/>
        </div>
      </div>
    );
  }
}

export default UserBox;