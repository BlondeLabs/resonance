import React from 'react';

const bannerStyles = {
  backgroundColor: 'rgb(7, 38, 29)',
  color: 'white',
  height: '25vh',
  padding: '25px',
  paddingTop: '100px',
  fontSize: '8vmin',
};

const getStyles = () => {
  return bannerStyles;
};

const Banner = () => {
  return (
    <div
      className="Banner"
      style={getStyles()}>
      <div className="Banner-title">c l i x</div>
    </div>
  );
};

export default Banner;
