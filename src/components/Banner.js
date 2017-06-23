import React from 'react';
import Colors from '../constants/Colors';

const bannerStyles = {
  backgroundColor: Colors.midnight.deep,
  color: Colors.midnight.shallow,
  height: '25vh',
  padding: '25px',
  paddingTop: '100px',
  paddingBottom: '50px',
  fontSize: '8vmin',
  boxSizing: 'border-box',
};

const getStyles = () => {
  return bannerStyles;
};

const Banner = () => {
  return (
    <div
      className="Banner"
      style={getStyles()}>
      <div className="hvr-pulse">k o k o</div>
    </div>
  );
};

export default Banner;
