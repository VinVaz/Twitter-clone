import React, { Component } from 'react';

const ContainerStyle = {
  position: 'absolute',
  left: '125px',
  top: '50px',
  width: '600px',
  height: '300px',
  boxSizing: 'border-box',
  padding: '50px',
  backgroundColor: '#c9d4c6',
};
const emailInputStyle = {
  position: 'absolute',
  left: '25px',
  top: '130px',
  width: '300px',
  height: '40px',
  boxSizing: 'border-box',
  borderRadius: '2px',
  border: 'none',
  paddingLeft: '10px',
  backgroundColor: '#fffffd',
};
const passwordInputStyle = {
  position: 'absolute',
  left: '25px',
  top: '180px',
  width: '300px',
  height: '40px',
  boxSizing: 'border-box',
  borderRadius: '2px',
  paddingLeft: '10px',
  border: 'none',
  backgroundColor: '#fffffd',
};
const LogInButtonStyle = {
  position: 'absolute',
  left: '25px',
  top: '230px',
  width: '100px',
  height: '40px',
  boxSizing: 'border-box',
  borderRadius: '2px',
  paddingLeft: '10px',
  border: 'none',
  backgroundColor: '#4f5368',
  color: '#fffffd',
};

class Unlogged extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <h2>Log in to Twitter</h2>
        <input style={ emailInputStyle } placeholder="email"/>
        <input style={ passwordInputStyle } placeholder="password"/>
        <button style={ LogInButtonStyle }>Log In</button>
      </div>
    );
  }
}

export default Unlogged;