import React, { Component } from 'react';

const ContainerStyle = {
  backgroundColor: '#c9d4c6',
  minHeight: '60px',
  padding: '2px',
};
const BodyStyle = {
  minHeight: '100px',
  margin: '1px',
};
const FooterStyle = {
  position: 'relative',
  height: '40px',
  margin: '0px',
};
const InputStyle = {
  height: '80px',
  margin: '8px 5px 5px 10px',
  width: '75%',
  display: 'inline-block',
  borderRadius: '10px',
  border: 'none',
};
const UserPhotoStyle = {
  display: 'inline-block',
  margin: '5px',
};
const TweetStyle = {
  position: 'absolute',
  right: '50px',
  top: '4px',
};

class TweetInputBox extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <div style={ BodyStyle }>
          <div style={ UserPhotoStyle }>{`user's photo`}</div>
          <input style={ InputStyle } placeholder='new tweet'/>
        </div>
        <div style={ FooterStyle }>
          <button style={TweetStyle}>Tweet</button>
        </div>
      </div>
    );
  }
}

export default TweetInputBox;