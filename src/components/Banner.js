import React from 'react';
import Colors from '../constants/Colors';

const bannerStyles = {
  backgroundColor: Colors.midnight.deep,
  color: Colors.midnight.shallow,
  height: '25vh',
  padding: '50px',
  fontSize: '8vmin',
  boxSizing: 'border-box',
};

const getStyles = () => {
  return bannerStyles;
};

const Banner = ({title}) => {
  return (
    <div
      className="Banner"
      style={getStyles()}>
      <div className="hvr-pulse title">{title}</div>
    </div>
  );
};

export default Banner;
