import React, { Component } from 'react';

const ContainerStyle = {
  position: 'relative',
};
const PolygonStyle = {
  fill: '#abe',
};
const LogoutStyle = {
  position: 'absolute',
  left: '37px',
  bottom: '15px',
};
class ProfileView extends Component {
  render() {
    return (
      <div style={ ContainerStyle }>
        <svg height={'200'} width={'150'}>
          <polygon points={'0,15 73,15 75,0 90,15 150,15 150,200 0,200'} style={PolygonStyle}/>
        </svg>
        <button style={ LogoutStyle }>Logout</button>
      </div>
    );
  }
}

export default ProfileView;
