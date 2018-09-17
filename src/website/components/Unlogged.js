import React, { Component } from 'react';

const ContainerStyle = {
  position: 'absolute',
  left: '350px',
  top: '100px',
  width: '300px',
  height: '320px',
  boxSizing: 'border-box',
  padding: '50px',
  backgroundColor: '#c9d4c6',
};
const SignUpButtonStyle = {
  position: 'absolute',
  left: '25px',
  top: '200px',
  width: '250px',
  height: '40px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4f5368',
  color: '#fffffd',
};
const LogInButtonStyle = {
  position: 'absolute',
  left: '25px',
  top: '250px',
  width: '250px',
  height: '40px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#fffffd',
};

class Unlogged extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <h1>Join Twitter today</h1>
        <button style={ SignUpButtonStyle }>Sign Up</button>
        <button style={ LogInButtonStyle }>Log in</button>
      </div>
    );
  }
}

export default Unlogged;