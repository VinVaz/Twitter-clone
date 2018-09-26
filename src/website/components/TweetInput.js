import React, { Component } from 'react';

const ContainerStyle = {
  backgroundColor: '#c9d4c6',
  padding: '2px',
};
const BodyStyle = {
  position: 'relative',
  height: '100px',
};
const FooterStyle = {
  position: 'relative',
  height: '40px',
};
const TextAreaContainerStyle = {
  position: 'absolute',
  left: '100px',
  height: '80px',
  right: '50px',
  top: '10px',
};
const TextAreaStyle = {
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '10px 15px',
  borderRadius: '10px',
  border: 'none',
};
const UserPhotoStyle = {
  position: 'absolute',
  left: '10px',
  top: '10px',
  width: '80px',
  height: '100px',
  backgroundColor: '#890',
};
const TweetStyle = {
  position: 'absolute',
  right: '50px',
  top: '8px',
};

class TweetInputBox extends Component {
  render() {
    return (
      <div style={ContainerStyle}>
        <div style={BodyStyle}>
          <div style={UserPhotoStyle}>user's photo</div>
          <div style={TextAreaContainerStyle}>
            <textarea type="text" style={TextAreaStyle} placeholder="new tweet" />
          </div>
        </div>
        <div style={FooterStyle}>
          <button style={TweetStyle}>Tweet</button>
        </div>
      </div>
    );
  }
}

export default TweetInputBox;
